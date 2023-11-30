import React from "react";
import { useFilterContext } from "../contexts/FilterContext";

const FilterDrawer = ({ onFilterApply }) => {
  const { state, dispatch } = useFilterContext();

  const handleFilterChange = (filter, value) => {
    dispatch({ type: "SET_FILTER", filter, value });
  };

  const handleApplyFilters = () => {
    onFilterApply(state);
  };

  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    console.log(state);
    onFilterApply(state);
  };
  return (
    <div className="drawer p-4 border rounded bg-white">
      <div className="mb-4">
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
          Location:
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={state.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="mb-4">
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
      </div>

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
          Species:
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={state.species}
          onChange={(e) => handleFilterChange("species", e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
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
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {/* <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mr-2"
        onClick={handleClearFilters}
      >
        Clear Filters
  </button> */}

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
