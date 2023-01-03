/*
코드설명: getPost()로 가져온 포스트글을 볼 수 있는 메인 컴포넌트.
수정날짜: 2022-12-26
*/

import { useEffect } from "react";
import "./style.scss";
import Nav from "../nav";
import MbtiNav from "../mbtiNav";
import Post from "../post";
import getPost from "../../controller/getPost";

const Main = function () {
    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className="main">
            <Nav />
            <MbtiNav />
            <Post />
        </div>
    );
};

export default Main;
