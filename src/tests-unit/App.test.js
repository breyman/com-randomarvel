import { render, screen } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

it("renders nav logo", () => {
  const generateImage = screen.getByTestId("logo");
  expect(generateImage).toBeInTheDocument();
});

it("renders footer", () => {
  const footerElement = screen.getByText(/About/i);
  expect(footerElement).toBeInTheDocument();
});
