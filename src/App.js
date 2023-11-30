// App.js
import React, { useEffect, useState } from "react";
import "./index.css";
import CardComponent from "./components/common/CardComponent";
import FilterComponent from "./components/common/FilterComponent";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState("");
  const [characterSelected, setCharacterSelected] = useState(false);

  const fetchCharacters = async (page) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${nameFilter}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCardData(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCharacters(currentPage);
  }, [currentPage, nameFilter]);

  const handleFilterChange = (filterValue) => {
    setNameFilter(filterValue);
    setCurrentPage(1); // Reset to the first page when the filter changes
  };

  return (
    <div className="p-8">
      <FilterComponent
        onFilterChange={handleFilterChange}
        setCharacterSelected={setCharacterSelected}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {loading ? (
          <p>Loading...</p>
        ) : (
          cardData.map((card) => (
            <CardComponent
              key={card.id}
              name={card.name}
              status={card.status}
              imageSrc={card.image}
              location={card.location.name}
              gender={card.gender}
              species={card.species}
              type={card.type}
              episode={card.episode[0]}
            />
          ))
        )}
      </div>
      {!characterSelected && (
        // Render pagination buttons only if a character is not selected
        <div className="mt-4 flex justify-center">
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Previous Page
          </button>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
