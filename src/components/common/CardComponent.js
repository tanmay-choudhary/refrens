import React from "react";

function CardComponent({
  name,
  status,
  location,
  gender,
  species,
  type,
  episode,
  imageSrc,
}) {
  return (
    <div className="lg:w-106 2xl:w-106 w-full mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row 2xl:flex-row justify-center">
      <div className="lg:w-1/3 2xl:w-1/3">
        <img
          className="w-full h-48 lg:h-full object-contain"
          src={imageSrc}
          alt="Card Image"
        />
      </div>

      <div className="p-4 flex flex-col justify-between lg:w-1/2 2xl:w-1/2">
        <div>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Name:</span> {name}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Status:</span> {status}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Location:</span> {location}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Gender:</span> {gender}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Species:</span> {species}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Type:</span> {type}
          </p>
        </div>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Episode:</span> {episode}
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
