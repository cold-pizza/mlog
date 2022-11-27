import { useState, useEffect } from "react";

import "./style.scss";
import Nav from "../nav";
import Post from "../post";

import { Account } from "../../types";

const Main = function () {
    const [account, setAccount] = useState<Account>();

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (typeof userStr === "string") {
            const user = JSON.parse(userStr);
            setAccount(user);
        }
    }, []);
    return (
        <div className="main">
            <Nav />
            <span>
                {account
                    ? `반갑습니다. ${account.nickName} 님이 로그인 하셨습니다!`
                    : "데이터가 없습니다. 로그인 또는 로컬스토리지를 확인해주세요."}
            </span>
            <p>11/28</p>
            <p>id 암호화</p>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Main;
