import { useState, useEffect } from "react";

import "./style.scss";
import Nav from "../nav";
import Post from "../post";

import { Account, IdEncryption } from "../../types";

const Main = function () {
    const [account, setAccount] = useState<Account>();
    const [idList, setIdList] = useState([undefined]);
    const idEncryption: IdEncryption = function (state, setState) {
        const emailFront = JSON.parse(localStorage.user).email.split("@")[0];
        for (let i = 0; i < emailFront.length; i++) {
            console.log(emailFront.charCodeAt(i));
            if (idList[0] === undefined) {
                setIdList([...emailFront.charCodeAt(i)]);
            } else {
                setIdList([...idList, emailFront.charCodeAt(i)]);
            }
        }
        console.log(state);
    };

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (typeof userStr === "string") {
            const user = JSON.parse(userStr);
            setAccount(user);
            const emailFront = user.email.split("@")[0];
            console.log(emailFront.charCodeAt());
        }
        // idEncryption(idList, setIdList);
    }, []);
    return (
        <div className="main">
            <Nav />
            <span>
                {account
                    ? `반갑습니다. ${account.nickName} 님이 로그인 하셨습니다!`
                    : "데이터가 없습니다. 로그인 또는 로컬스토리지를 확인해주세요."}
            </span>
            <p>11/26 공지</p>
            <p>id 암호화 예정</p>
            <p>postKey 대신 id사용 예정 {"->"} postKey 삭제</p>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Main;
