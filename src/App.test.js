import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<App />);
});
