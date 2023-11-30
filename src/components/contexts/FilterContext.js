import React, { createContext, useReducer, useContext } from "react";

const FilterContext = createContext();

const initialState = {
  status: "",
  location: "",
  episode: "",
  gender: "",
  species: "",
  type: "",
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, [action.filter]: action.value };
    case "CLEAR_FILTERS":
      return initialState;
    default:
      return state;
  }
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

export { FilterProvider, useFilterContext };
