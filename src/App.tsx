import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Main from "./view/main/index";
import Login from "./view/login/login";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" render={() => <Main />} />
                <Route path="/login" render={() => <Login />} />
            </Switch>
        </div>
    );
}

export default App;
