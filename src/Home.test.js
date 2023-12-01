import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./components/pages/Home";

import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("Home Component Tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  //   test("renders loader while fetching data", async () => {
  //     render(<Home />);
  //     expect(screen.getByTestId("loader")).toBeInTheDocument();
  //   });

  //   test("renders cards after data is loaded", async () => {
  //     fetchMock.mockResponseOnce(
  //       JSON.stringify({ results: [{ id: 1, name: "Character 1" }] })
  //     );
  //     render(<Home />);
  //     await screen.findByTestId("card-component");
  //     expect(screen.getByText("Character 1")).toBeInTheDocument();
  //   });

  //   test("handles page change correctly", async () => {
  //     fetchMock.mockResponseOnce(
  //       JSON.stringify({ results: [{ id: 1, name: "Character 1" }] })
  //     );
  //     render(<Home />);
  //     await screen.findByTestId("card-component");

  //     const nextButton = screen.getByText("Next Page");
  //     fireEvent.click(nextButton);

  //     await screen.findByTestId("card-component");
  //     expect(screen.getByText("Character 1")).toBeInTheDocument();
  //     expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining("page=2"));
  //   });
});
