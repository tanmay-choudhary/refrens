import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./components/contexts/FilterContext"; // Import the FilterProvider
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterProvider>
      {" "}
      {/* Wrap your App component with FilterProvider */}
      <App />
    </FilterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
