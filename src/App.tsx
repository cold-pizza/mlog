import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Main from "./view/main/index";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/main" render={() => <Main />} />
            </Switch>
        </div>
    );
}

export default App;
