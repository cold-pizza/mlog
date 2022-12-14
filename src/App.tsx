import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Main from "./view/main/index";
import Login from "./view/login";
import SignUp from "./view/signup";
import MyProfile from "./view/myProfile";
import PostContents from "./view/postContents";
import Search from "./view/search";
import CreatePost from "./view/createPost";
import UpdatePost from "./view/updatePost";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact render={() => <Main />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/signup" render={() => <SignUp />} />
                <Route path="/myprofile" render={() => <MyProfile />} />
                <Route path="/post/:id/:id" render={() => <PostContents />} />
                <Route path="/search" render={() => <Search />} />
                <Route path="/create-post" render={() => <CreatePost />} />
                <Route
                    path="/update/post/:id/:id"
                    render={() => <UpdatePost />}
                />
            </Switch>
        </div>
    );
}

export default App;
