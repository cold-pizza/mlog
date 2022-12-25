import "./App.scss";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import Main from "./view/main/index";
import Login from "./view/login";
import SignUp from "./view/signup";
import MyProfile from "./view/myProfile";
import PostContents from "./view/postContents";
import Search from "./view/search";
import CreatePost from "./view/createPost";
import UpdatePost from "./view/updatePost";
import isLogin from "./controller/isLogin";
import MbtiPost from "./view/mbtiPost";

axios.defaults.baseURL = `http://localhost:3010`;

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact render={() => <Main />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/signup" render={() => <SignUp />} />
                <Route path="/post/:id/:id" render={() => <PostContents />} />
                <Route path="/search" render={() => <Search />} />
                <Route path="/mbti/:id" render={() => <MbtiPost />} />
                <Route
                    path="/update/post/:id/:id"
                    render={() => <UpdatePost />}
                />
                <Route
                    path="/create-post"
                    render={() => {
                        return isLogin() ? <CreatePost /> : <Main />;
                    }}
                />
                <Route
                    path="/myprofile"
                    render={() => {
                        return isLogin() ? <MyProfile /> : <Main />;
                    }}
                />
            </Switch>
        </div>
    );
}

export default App;
