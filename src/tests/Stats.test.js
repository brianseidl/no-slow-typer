import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Stats from "../components/Stats";


afterEach(cleanup);

it("renders", () => {
    const { asFragement } = render(<Stats correctCount={1} incorrectCount={0} startTime={123456789} />);
});