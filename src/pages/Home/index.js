import React from 'react';

import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";

const Home = () => {
    return (
       <Container>
           {({searchValue, onSearchChange, articles}) => <Autocomplete
               searchValue={searchValue}
               onSearchChange={onSearchChange}
               articles={articles}
           />}
       </Container>
    )
};

export default Home