import { useState, useEffect } from "react";

import "./style.scss";
import Nav from "../nav";
import Post from "../post";

import { Account } from "../../types";

import axios from "axios";

const Main = function () {
    const [account, setAccount] = useState<Account>();
    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (typeof userStr === "string") {
            const user = JSON.parse(userStr);
            console.log(user);
        }
    }, []);
    return (
        <div className="main">
            <Nav />
            <span>다양한 MBTI가 모여서 대화하는 블로그입니다.</span>
            <div>⭐️카테고리 추가 예정⭐️</div>
            <div>{account ? account.pw : null}</div>
            {/* <section className="category">카테고리..</section> */}
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Main;
