import React from 'react';
import ReactDOM from 'react-dom';
import Btn from '../index';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Btn />, div)
})

test('renders button correctly', () => {
    const {getByTestId} = render(<Btn text="Search" />)
    expect(getByTestId('button')).toHaveTextContent('Search')
})