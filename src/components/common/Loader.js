import React from "react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-100">
      <div className="text-white text-center">
        <svg
          className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5a8 8 0 016.524-7.938C10.447 4.996 6.574 9.868 5.062 15H6z"
          ></path>
        </svg>
        <p className="text-blue-800 ">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
