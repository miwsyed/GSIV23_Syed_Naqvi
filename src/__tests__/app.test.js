import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe("Integration Test => App", () => {
  it("Case-1: Render main view", async () => {
    const mocks = []; // empty array right now
    render(<App mocks={mocks} />);

    const movieCards = await screen.findAllByLabelText("movie cards");
    expect(movieCards.length).toBeGreaterThan(0);
  });

  it("Case-2: Render movie info screen when clicking on movie card", async () => {
    const mocks = []; // empty array right now
    render(<App mocks={mocks} />);

    const [movieCard1, ...restOfTheMovieCards] =
      await screen.findAllByLabelText("movie_cards");
    userEvent.click(movieCard1);

    const movieInfoCard = await screen.findByLabelText("movie info");
    expect(movieInfoCard).toBeInTheDocument();
  });
});
