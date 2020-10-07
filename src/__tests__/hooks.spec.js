import { renderHook, act } from 'react-hooks-testing-library';

import {useSearchForm} from '../hooks';

describe('useSearchForm hook', () => {
    let event1;
    let event2;

    beforeEach(() => {
        event1 = {
            target: {
                value: 'test data'
            }
        };

        event2 = {
            target: {
                value: 'updated event'
            }
        }
    });

    it('should handle search form', () => {
        const { result } = renderHook(() => useSearchForm());

        act(() => result.current.onSearchChange(event1));

        expect(result.current.searchValue).toEqual('test data');

        act(() => result.current.onSearchChange(event2));

        expect(result.current.searchValue).toEqual('updated event');
    })
});