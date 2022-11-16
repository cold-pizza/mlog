import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Main from "./view/main/index";
import Login from "./view/login";
import SignUp from "./view/signup";
import MyProfile from "./view/myProfile";
import PostContents from "./view/postContents";
import Search from "./view/search";
import PostWrite from "./view/postwrite";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact render={() => <Main />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/signup" render={() => <SignUp />} />
                <Route path="/myprofile" render={() => <MyProfile />} />
                <Route path="/postcontents" render={() => <PostContents />} />
                <Route path="/search" render={() => <Search />} />
                <Route path="/postwrite" render={() => <PostWrite />} />
            </Switch>
        </div>
    );
}

export default App;
