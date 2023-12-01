import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        console.log(data);
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, [id]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="p-8">
      <button
        className="fixed top-2 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={goBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>
      <div className="lg:w-[70%] lg:h-[80vh] container mx-auto p-4 bg-gray-200 shadow-md rounded-md lg:flex  lg:flex-row items-center justify-between">
        <div className="flex-shrink-0">
          <img
            src={character?.image}
            alt={character?.name}
            className="rounded-md mb-4"
          />
        </div>

        <div className="ml-4">
          <h2 className="text-xl font-semibold mb-2">{character?.name}</h2>
          <p className="text-gray-600 mb-2">
            Species: {character?.species} | Gender: {character?.gender}
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Origin</h3>
            <p className="text-gray-600 mb-2">
              Name: {character?.origin?.name} | Dimension:{" "}
              {character?.origin?.dimension} | Residents:{" "}
              {character?.origin?.residents?.length}
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Current Location</h3>
            <p className="text-gray-600 mb-2">
              Name: {character?.location?.name} | Dimension:{" "}
              {character?.location?.dimension} | Residents:{" "}
              {character?.location?.residents?.length}
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Episodes</h3>
            <ul className="list-disc list-inside">
              {character?.episodes?.map((episode) => (
                <li key={episode.id}>{episode.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
