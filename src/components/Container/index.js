import React from 'react';
import {useDebounce, useSearch, useSearchForm} from "../../hooks";

const Container = ({ children }) => {
    const {searchValue, onSearchChange} = useSearchForm();
    const {articles} = useSearch(useDebounce(searchValue));

    return children({ searchValue, onSearchChange, articles })
};

export default Container;