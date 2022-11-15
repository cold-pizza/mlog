import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Main from "./view/main/index";
import Login from "./view/login";
import SignUp from "./view/signup";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact render={() => <Main />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/signup" render={() => <SignUp />} />
            </Switch>
        </div>
    );
}

export default App;
