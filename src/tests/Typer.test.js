import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
//import "jest-dom/extend-expect";

import Typer from "../components/Typer";

afterEach(cleanup);

it("renders", () => {
    const { asFragement } = render(<Typer />);
});

/*

TODO test cases
    - Test char turns green when correct char is imputted
    - Test char turns red when incorrect char is imputted
    - 
*/