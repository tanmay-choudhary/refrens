import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import CharacterDetails from "./components/common/CharacterDetails";

function App() {
  const character = {
    name: "Rick Sanchez",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/722.jpeg",
    origin: {
      name: "Earth",
      dimension: "C-137",
      residents: ["Morty", "Summer", "Jerry", "Beth"],
    },
    location: {
      name: "Citadel of Ricks",
      dimension: "Unknown",
      residents: ["Various Ricks"],
    },
    episodes: [
      { id: 1, name: "Pilot" },
      { id: 2, name: "Lawnmower Dog" },
    ],
  };
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/CharacterDetails"
            element={<CharacterDetails character={character} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
