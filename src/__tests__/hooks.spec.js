import { renderHook, act } from '@testing-library/react-hooks';

import { useSearchForm, useDebounce } from '../hooks';

jest.useFakeTimers();

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

describe('useDebounce hook', () => {
    it('should update value after specified delay', () => {
        const val1 = '1';
        const { result } = renderHook(() => useDebounce(val1, 500));

        expect(result.current).toEqual(val1);
        jest.advanceTimersByTime(510);
        expect(result.current).toBe(val1);
    });

    it('should return the same value before timeout is reached', () => {
        const val1 = '1';
        const val2 = '2';
        // const { result, rerender } = renderHook(() => useDebounce(val1, 500));

        const { result, rerender } = renderHook(
            ({ value, delay }) => useDebounce(value, delay),
            { initialProps: { value: val1, delay: 500 } }
        );

        expect(result.current).toEqual(val1);
        jest.advanceTimersByTime(498);

        rerender({ value: val2 });

        expect(result.current).toBe(val1);

        jest.runAllTimers();

        expect(result.current).toBe(val2);
    });
});