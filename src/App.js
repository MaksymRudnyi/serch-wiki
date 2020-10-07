import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const App = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route component={NotFound}/>
    </Switch>
);

export default App;
