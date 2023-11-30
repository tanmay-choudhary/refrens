import React, { useEffect, useState } from "react";
import CardComponent from "../common/CardComponent";
import FilterComponent from "../common/FilterComponent";
import FilterDrawer from "../common/FilterDrawer";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState("");
  const [characterSelected, setCharacterSelected] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleToggleFilterDrawer = () => {
    setShowFilterDrawer((prev) => !prev);
  };

  const handleFilterApply = (filters) => {
    setAppliedFilters(filters);
    setShowFilterDrawer(false);
    setCurrentPage(1);
  };

  const fetchCharacters = async (page) => {
    try {
      const filterParams = new URLSearchParams({
        ...appliedFilters,
        name: nameFilter,
      }).toString();
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&${filterParams}`
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
  }, [currentPage, nameFilter, appliedFilters]);

  const handleFilterChange = (filterValue) => {
    setNameFilter(filterValue);
    setCurrentPage(1);
  };

  const totalPages = 20; // Assuming you know the total number of pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="p-8 flex">
        <div className="w-1/4">
          <div className="sticky top-0">
            <FilterComponent
              onFilterChange={handleFilterChange}
              setCharacterSelected={setCharacterSelected}
            />
            <button
              onClick={handleToggleFilterDrawer}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Show Filters
            </button>
            {showFilterDrawer && (
              <FilterDrawer onFilterApply={handleFilterApply} />
            )}
          </div>
        </div>

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
      </div>
      {!characterSelected && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Previous Page
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next Page
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
