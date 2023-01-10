/*
코드설명: mbti카테고리가 있는 컴포넌트.
수정날짜: 2022-12-25
*/

import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import createMbtiPost from "../../controller/create/createMbtiPost";
import getPost from "../../controller/get/getPost";
import "./style.scss";

const MbtiNav = function () {
    const history = useHistory();
    const [mbti, setMbti] = useState("");
    const [post, setPost] = useState([]);
    const mbtiList = [
        ["I", "E"],
        ["S", "N"],
        ["T", "F"],
        ["P", "J"],
    ];
    const pathname = window.location.pathname.split("/")[3];
    useEffect(() => {
        const mbti = window.location.pathname.split("/")[3];
        getPost(setPost);
        setMbti(mbti);
    }, []);

    return (
        <div className="mbti-nav">
            <section className="mbti-category">
                {mbtiList.map((list) => {
                    return (
                        <div key={list.toString()} className="mbti-line">
                            <p
                                onClick={() => {
                                    createMbtiPost(list[0], post);
                                    history.push(`/mbti/${list[0]}`);
                                    window.location.reload();
                                }}
                            >
                                {list[0]}
                            </p>
                            <p
                                onClick={() => {
                                    createMbtiPost(list[1], post);
                                    history.push(`/mbti/${list[1]}`);
                                    window.location.reload();
                                }}
                            >
                                {list[1]}
                            </p>
                        </div>
                    );
                })}
            </section>
            <span className="mbti-post">
                {pathname === undefined ? "통합" : mbti} 게시글
            </span>
        </div>
    );
};

export default MbtiNav;
