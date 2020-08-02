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
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default App;
