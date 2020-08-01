import React from 'react';

import Container from "./components/Container";
import Autocomplete from "./components/Autocomplete";

const App = () => (
    <Container>
        {({searchValue, onSearchChange, articles}) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue}/>}
    </Container>
);

export default App;
