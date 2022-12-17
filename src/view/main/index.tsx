import { useEffect } from "react";

import "./style.scss";
import Nav from "../nav";
import Post from "../post";

import axios from "axios";

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = `http://localhost:3010`;

const Main = function () {
    useEffect(() => {
        axios
            .get("/api/post")
            .then((res) => {
                localStorage.setItem(
                    "post",
                    JSON.stringify(res.data.reverse())
                );
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="main">
            <Nav />
            {/* <span>
                {account
                    ? `${account.nickName} 님이 로그인 하셨습니다!`
                    : "로그인을 해주세요."}
            </span> */}
            {/* <p className="post-list-form">게시글</p> */}
            <Post />
        </div>
    );
};

export default Main;
