import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <div>Home page</div>}/>
            <Route path="/search" render={() => <div>Search page</div>}/>
            <Route render={() => <div>Not found page</div>}/>
        </Switch>
    </Router>
);

export default App;
