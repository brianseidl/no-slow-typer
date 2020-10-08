import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
//import "jest-dom/extend-expect";

import Typer from "./Typer";

afterEach(cleanup);

it("renders", () => {
	const { asFragement } = render(<Typer />);
});

