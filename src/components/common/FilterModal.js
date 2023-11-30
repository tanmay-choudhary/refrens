// FilterModal.js
import React from "react";
import Modal from "react-modal";

const FilterModal = ({ isOpen, onRequestClose, onApplyFilters }) => {
  const filters = [
    "Status",
    "Location",
    "Episode",
    "Gender",
    "Species",
    "Type",
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="filter-modal"
      overlayClassName="filter-modal-overlay"
    >
      <h2>Filters</h2>
      {filters.map((filter) => (
        <div key={filter} className="filter-option">
          <label>
            <input type="checkbox" /> {filter}
          </label>
        </div>
      ))}
      <button onClick={onApplyFilters}>Apply Filters</button>
    </Modal>
  );
};

export default FilterModal;
