import React, { useState, useEffect } from "react";

const FilterComponent = ({ onFilterChange, setCharacterSelected }) => {
  const [filterValue, setFilterValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  //Hi reference
  // I have utilized debouncing here
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchSuggestions = async (value) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${value}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.results.length > 0) {
        setShowSuggestion(true);
        setSuggestions(data.results);
      } else {
        setShowSuggestion(false);
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    if (filterValue.trim() === "") {
      setShowSuggestion(false);
      setSuggestions([]);
      return;
    }

    const delayedFetchSuggestions = debounce(fetchSuggestions, 300);
    delayedFetchSuggestions(filterValue);
  }, [filterValue]);

  const handleFilterChange = (value) => {
    setFilterValue(value);
    setSelectedCharacter(null);
    setCharacterSelected(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setFilterValue(suggestion.name);
    onFilterChange(suggestion.name);
    setSelectedCharacter(suggestion);
    setCharacterSelected(true);
    setShowSuggestion(false);
  };

  const handleClearSelection = () => {
    setFilterValue("");
    onFilterChange("");
    setSelectedCharacter(null);
    setCharacterSelected(false);
    setShowSuggestion(false);
  };

  return (
    <div className="mb-4 relative">
      <div className="lg:flex lg:flex-row flex flex-col items-center justify-between">
        <input
          type="text"
          id="nameFilter"
          placeholder="Search by name... "
          value={filterValue}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded"
        />
        {selectedCharacter && (
          <button
            onClick={handleClearSelection}
            className="mt-4 lg:mt-0 ml-2 px-2 py-1 bg-red-500 text-white rounded"
          >
            Clear Selection
          </button>
        )}
      </div>
      {showSuggestion && suggestions.length > 0 && filterValue.trim() !== "" && (
        <ul className="absolute mt-2 border border-gray-300 rounded bg-white">
          {suggestions.slice(0, 5).map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer flex items-center px-2 py-1 hover:bg-gray-200"
            >
              <img
                src={suggestion.image}
                alt={suggestion.name}
                className="w-8 h-8 mr-2 rounded-full"
              />
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterComponent;
