import { render, screen, act } from "@testing-library/react";
import RandomMedia from "../components/RandomMedia";
import testData from "../data/marvel-test.json";

beforeEach(() => {
  render(<RandomMedia media={testData} />);
});

it("loads without media selected", () => {
  const mediaTitleDisplay = screen.getByTestId("title-display");
  expect(mediaTitleDisplay).toHaveTextContent("");
});

it("displays the title when the generate button is clicked", async () => {
  act(() => {
    screen.getByTestId("generate-random-marvel-button").click();
  });

  // wait for the title to display
  await new Promise((r) => setTimeout(r, 2000));

  const mediaTitleDisplay = screen.getByTestId("title-display");
  expect(mediaTitleDisplay).toHaveTextContent(
    "Captain America: The First Avenger"
  );
});

it("sets toggle button styling correctly", () => {
  // test toggle for All
  act(() => {
    screen.getByTestId("media-toggle-selector-all").click();
  });
  expect(screen.getByTestId("media-toggle-selector-all")).toHaveClass(
    "text-white"
  );

  // test toggle for Movie
  act(() => {
    screen.getByTestId("media-toggle-selector-movie").click();
  });
  expect(screen.getByTestId("media-toggle-selector-movie")).toHaveClass(
    "text-white"
  );

  // test toggle for TV
  act(() => {
    screen.getByTestId("media-toggle-selector-tv").click();
  });
  expect(screen.getByTestId("media-toggle-selector-tv")).toHaveClass(
    "text-white"
  );
});
