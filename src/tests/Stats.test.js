import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Stats from "../components/Stats";

afterEach(cleanup);

it("renders", () => {
  const { asFragement } = render(
    <Stats correctCount={1} incorrectCount={0} startTime={123456789} />
  );
});

test("Test Stats word counts are correct", () => {
  render(<Stats correctCount={24} incorrectCount={6} startTime={123456789} />);

  expect(screen.getByTestId("correct-count").innerHTML).toBe("24");
  expect(screen.getByTestId("incorrect-count").innerHTML).toBe("6");
});

test("Test Stats words per minute calculation is correct", () => {
  render(
    <Stats correctCount={30} incorrectCount={0} startTime={Date.now() - 5990} />
  );

  expect(screen.getByTestId("wpm").innerHTML).toBe("60");
});

test("Test words per minute is correct with incorrect chars", () => {
  render(
    <Stats correctCount={24} incorrectCount={6} startTime={Date.now() - 5990} />
  );

  expect(screen.getByTestId("wpm").innerHTML).toBe("60");
});
