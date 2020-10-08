import React from 'react';
import {mount} from 'enzyme'

import Container from ".";

jest.mock('../../hooks', () => ({
    useDebounce: jest.fn(() => ({})),
    useSearch: jest.fn(() => ({articles: []})),
    useSearchForm: jest.fn(() => ({
        searchValue: 'testValue',
        onSearchChange: jest.fn()
    }))
}));

const render = (props, children) => mount(<Container {...props}>{children}</Container>);

const Children = () => <div>Test</div>;

describe('Container component', () => {
    let sut;
    let props;
    let children = ({searchValue, onSearchChange, articles}) => <Children searchValue={searchValue}
                                                                          onSearchChange={onSearchChange}
                                                                          articles={articles}/>;

    describe('without props', () => {
        beforeEach(() => {
            sut = render(props, children)
        });

        it('should match snapshot', () => {
            expect(sut).toMatchSnapshot();
        })
    });

    describe('when passed custom props', () => {
        beforeEach(() => {
            sut = render(props, children)
        });

        it('should return searchValue in Children component', () => {
            const { searchValue } = sut.find('Children').props();

            expect(searchValue).toBe('testValue')
        })
    })
})