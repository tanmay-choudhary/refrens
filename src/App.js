import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import CharacterDetails from "./components/common/CharacterDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CharacterDetails/:id" element={<CharacterDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
