import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Char from "../components/Char";


afterEach(cleanup);

it("renders", () => {
  const { asFragement } = render(<Char isActive={true} expected={'H'} input={null} />);
});

test("char is blue when active", () => {
  render(<Char isActive={true} expected='H' input={null} />);

  expect(screen.getByText(/H/)).toHaveClass("letter-active");
});

test("char is red when char is incorrect", () => {
  render(<Char isActive={false} expected='H' input='e' />);

  expect(screen.getByText(/H/)).toHaveClass("letter-incorrect");
});

test("char is red when char is incorrect with case sensitive", () => {
  render(<Char isActive={false} expected='H' input='h' />);

  expect(screen.getByText(/H/)).toHaveClass("letter-incorrect");
});

test("char is green when char is correct", () => {
  render(<Char isActive={false} expected='H' input='H' />);

  expect(screen.getByText(/H/)).toHaveClass("letter-correct");
});

test("char is black when char is not entered and char is not active", () => {
  render(<Char isActive={false} expected='H' input={null} />);

  expect(screen.getByText(/H/)).toHaveClass("letter-not-entered");
});
