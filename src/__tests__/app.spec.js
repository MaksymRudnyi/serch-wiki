import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter } from "react-router-dom";

import App from '../App';

const render = (initialEntries) => mount(<MemoryRouter keyLength={0} initialEntries={initialEntries}><App /></MemoryRouter>);

describe('App component', () => {
    let initialEntries;
    let sut;

    describe('when render home page', () => {
        beforeEach(() => {
            initialEntries = ['/']
        });

        it('should match snapshot home page', () => {
            sut = render(initialEntries);

            expect(sut).toMatchSnapshot();
        })
    });

    describe('when render NotFound page', () => {
        beforeEach(() => {
            initialEntries = ['/shjjearch']
        });

        it('should match snapshot not found page', () => {
            sut = render(initialEntries);

            expect(sut).toMatchSnapshot();
        })
    })
});
