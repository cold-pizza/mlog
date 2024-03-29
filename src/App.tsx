/*
코드설명: Component들을 import해서 <Switch>문 안에서 <Route> 출력하는 코드.
수정날짜: 2022-12-26
*/

import "./App.scss";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
// import Component
import Main from "./view/main/index";
import Login from "./view/login";
import SignUp from "./view/signup";
import MyProfile from "./view/myProfile";
import PostContents from "./view/postContents";
import Search from "./view/search";
import CreatePost from "./view/createPost";
import UpdatePost from "./view/updatePost";
import isLogin from "./controller/users/isLogin";
import Footer from "./view/footer";
import CustomerCenter from "./view/footer/customerCenter";

// default url
axios.defaults.baseURL = `http://localhost:3010`;

function App() {
    return (
        <div className="App">
            <div className="App-box">
                <Switch>
                    <Route path="/" exact render={() => <Main />} />
                    <Route path="/mbti/:id" render={() => <Main />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/signup" render={() => <SignUp />} />
                    <Route
                        path="/post/:id/:id"
                        render={() => <PostContents />}
                    />
                    <Route path="/search" render={() => <Search />} />
                    <Route
                        path="/update/post/:id/:id"
                        render={() => <UpdatePost />}
                    />
                    <Route
                        path="/customer-center"
                        render={() => <CustomerCenter />}
                    />
                    {/* 로그인되어 있으면 url접근 허용. */}
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
            <Route path="/" exact render={() => <Footer />} />
        </div>
    );
}

export default App;
