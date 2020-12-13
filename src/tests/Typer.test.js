import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Typer from "../components/Typer";


afterEach(cleanup);

it("renders", () => {
  const { asFragement } = render(<Typer />);
});

test('Text is intered into the text box', () => {
  render(<Typer text="Hello, World" />);

  userEvent.type(screen.getByRole('textbox'), 'H');
  expect(screen.getByRole('textbox')).toHaveValue('H');
});

test('Timer starts when text is entered', () => {
  render(<Typer text="Hello, World" />);

  userEvent.type(screen.getByRole('textbox'), 'H');
  expect(screen.queryByTestId('stats-div')).toBeTruthy();
});

test('Timer does not start when text is not entered', () => {
  render(<Typer text="Hello, World" />);

  // no user event
  expect(screen.queryByTestId('stats-div')).toBeNull();
});
