import React from "react";
import { useFilterContext } from "../contexts/FilterContext";

const FilterDrawer = ({ onFilterApply, setShowFilterDrawer }) => {
  const { state, dispatch } = useFilterContext();

  const handleFilterChange = (filter, value) => {
    dispatch({ type: "SET_FILTER", filter, value });
  };

  const handleApplyFilters = () => {
    onFilterApply(state);
  };
  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    onFilterApply({
      status: "",
      location: "",
      episode: "",
      gender: "",
      species: "",
      type: "",
    });
  };
  const handleCloseDrawer = () => {
    setShowFilterDrawer(false);
  };
  return (
    <div className=" shadow-xl fixed right-0 top-0 h-[100vh] drawer py-4 px-7 border rounded bg-white">
      <button
        className="absolute top-2 right-2 p-2 text-gray-700 hover:text-gray-900"
        onClick={handleCloseDrawer}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="mb-4 mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Status:
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={state.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Species:
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={state.species}
          onChange={(e) => handleFilterChange("species", e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/*<div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Episode:
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={state.episode}
          onChange={(e) => handleFilterChange("episode", e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
  </div> */}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Gender:
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={state.gender}
          onChange={(e) => handleFilterChange("gender", e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Location:
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={state.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Earth">Earth</option>
          <option value="Dead">Abadango</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type:</label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={state.type}
          onChange={(e) => handleFilterChange("type", e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Parasite">Parasite</option>
          <option value="Mytholog">Mytholog</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <button
        className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400 mr-2"
        onClick={handleClearFilters}
      >
        Clear Filters
      </button>
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterDrawer;
