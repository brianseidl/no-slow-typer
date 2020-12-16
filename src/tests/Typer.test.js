import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Typer from "../components/Typer";

afterEach(cleanup);

it("renders", () => {
  const { asFragement } = render(<Typer />);
});

test("Text is intered into the text box", () => {
  render(<Typer text="Hello, World" />);

  userEvent.type(screen.getByRole("textbox"), "H");
  expect(screen.getByRole("textbox")).toHaveValue("H");
});

test("Timer starts when text is entered", () => {
  render(<Typer text="Hello, World" />);

  userEvent.type(screen.getByRole("textbox"), "H");
  expect(screen.queryByTestId("stats-div")).toBeTruthy();
});

test("Timer does not start when text is not entered", () => {
  render(<Typer text="Hello, World" />);

  // no user event
  expect(screen.queryByTestId("stats-div")).toBeNull();
});

test("Character limit enforced when len(input) equals len(text)", () => {
  render(<Typer text="Hello, World" />);
  expect(screen.getByTestId("inputBox").maxLength).toBe(12); // length of text
});

test("Timer stops when char limit is reached", async () => {
  render(<Typer text="Hello, World" />);
  userEvent.type(screen.getByTestId("inputBox"), "H");
  userEvent.type(screen.getByTestId("inputBox"), "Hello, World");
  let time = screen.queryByTestId("time").innerHTML;
  await sleep(100); // sleep for 0.1s
  let time2 = screen.queryByTestId("time").innerHTML;
  expect(time === time2);
});

test("User can backspace", () => {
  render(<Typer text="Hello, World" />);
  userEvent.type(screen.getByTestId("inputBox"), "Hello, World");
  expect(within(screen.getByTestId("text-box")).getByText(/d/)).toHaveClass(
    "letter-correct"
  );
  userEvent.type(screen.getByTestId("inputBox"), "Hello, Worl");
  expect(within(screen.getByTestId("text-box")).getByText(/d/)).toHaveClass(
    "letter-active"
  );
  userEvent.type(screen.getByTestId("inputBox"), "Hello, Wor");
  expect(within(screen.getByTestId("text-box")).getByText(/d/)).toHaveClass(
    "letter-not-entered"
  );
});

// Generic sleep function for help with testing
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
