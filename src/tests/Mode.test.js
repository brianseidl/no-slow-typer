import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Mode from "../components/Mode";

afterEach(cleanup);

it("renders", () => {
  const { asFragement } = render(<Mode />);
});

test("Descriptiion of Short Mode shows when mouse hover on the Short button", async () => {
  render(<Mode />);
  fireEvent.mouseEnter(screen.getByText(/Short/i));
  expect(screen.getByRole("description_txt")).toHaveTextContent("Short");
});

test("Descriptiion of Medium Mode shows when mouse hover on the Medium button", async () => {
  render(<Mode />);
  fireEvent.mouseEnter(screen.getByText(/Medium/i));
  expect(screen.getByRole("description_txt")).toHaveTextContent("Medium");
});

test("Descriptiion of Long Mode shows when mouse hover on the Long button", async () => {
  render(<Mode />);
  fireEvent.mouseEnter(screen.getByText(/Long/i));
  expect(screen.getByRole("description_txt")).toHaveTextContent("Long");
});
