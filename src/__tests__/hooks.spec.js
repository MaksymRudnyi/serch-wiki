import { renderHook, act } from '@testing-library/react-hooks';
import moxios from 'moxios';

import { useSearchForm, useDebounce, useSearch } from '../hooks';

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

describe('useSearch hook', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should have idle state initially', () => {

        const { result } = renderHook(() => useSearch());

        expect(result.current.status).toBe('IDLE');
        expect(result.current.articles).toEqual( [] );
    });

    it('should have pending state if request has started', () => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10`, {
            status: 200,
            responseText: ["elon",[],[],[]]
        });

        const { result, rerender } = renderHook(() => useSearch('elon'));

        rerender();

        expect(result.current.status).toBe('PENDING');
        expect(result.current.articles).toEqual([]);
    });

    it('should return search data if request was successful', async() => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10`, {
            status: 200,
            responseText: ["elon ",["Elon Musk"],[""],["link"]]
        });

        const { result, waitForNextUpdate } = renderHook(() => useSearch('elon'));

        await waitForNextUpdate();

        expect(result.current.status).toBe('SUCCESS');
        expect(result.current.articles).toEqual( [{ id: 'link', label: 'Elon Musk' }]);
    });

    it('should return ERROR state if request is failed', async() => {
        moxios.stubRequest(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10`, {
            status: 500,
            response: 'Test error'
        });

        const { result, waitForNextUpdate } = renderHook(() => useSearch('elon'));

        await waitForNextUpdate();

        expect(result.current.status).toBe('ERROR');
    });
});