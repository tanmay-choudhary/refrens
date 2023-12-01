import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeNames, setEpisodeNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);

        const episodePromises = data.episode.map(async (episodeUrl) => {
          try {
            const episodeResponse = await fetch(episodeUrl);
            const episodeData = await episodeResponse.json();
            return episodeData.name;
          } catch (error) {
            console.error("Error fetching episode data:", error);
            return null;
          }
        });
        // Hi Refrense I am,
        // Utilizing Promise.allSettled for episode promises to ensure fault tolerance.
        // settledEpisodes will contain information on the outcome of each episode fetch,
        // allowing for comprehensive error handling and successful data retrieval.
        const settledEpisodes = await Promise.allSettled(episodePromises);
        const episodeNames = settledEpisodes
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);
        setEpisodeNames(episodeNames);
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left"
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
              {episodeNames.slice(0, 5).map((episodeName, index) => (
                <li key={index}>{episodeName}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
