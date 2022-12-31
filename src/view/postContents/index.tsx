/*
코드설명: 포스트 글을 볼 수 있는 컴포넌트. 내 글이면 수정, 삭제란이 생성됨.
수정날짜: 2022-12-22
*/

import "./style.scss";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Nav from "../nav";
import { State } from "../../types";
import DeleteBox from "./deleteBox";
import readPostInfo from "../../controller/readPostInfo";

const PostContents = function () {
    const history = useHistory();
    const id = localStorage.user ? JSON.parse(localStorage.user).id : 0;
    const usersName = localStorage.user
        ? JSON.parse(localStorage.user).nickName
        : null;

    const [deleteSwitch, setDeleteSwitch] = useState(false);
    const [post, setPost] = useState<State["PostContentsType"]>({
        title: "",
        writer: "",
        days: "",
        contents: "",
    });

    useEffect(() => {
        const apiKeyNickname = decodeURI(
            window.location.pathname.split("/")[3]
        );
        const urlDays = window.location.pathname.split("/")[4];
        const apiKeyDays = urlDays.replace("%20", " ");
        readPostInfo(apiKeyNickname, apiKeyDays, setPost);
    }, []);
    return (
        <div className="post-contents">
            <Nav />
            <section className="post-contents-box">
                <div className="post-contents-info">
                    <header className="post-contents-title">
                        {post.title}
                    </header>
                    <div className="post-contents-info-box">
                        <div className="post-contents-meta-info">
                            <span>{post.writer}</span>
                            <span>{post.days}</span>
                        </div>
                        {usersName !== post.writer ? null : (
                            <div className="fix-box">
                                <span
                                    onClick={() => {
                                        history.push(
                                            `/update/post/${post.writer}/${post.days}`
                                        );
                                    }}
                                >
                                    수정
                                </span>
                                <span
                                    onClick={() =>
                                        setDeleteSwitch(!deleteSwitch)
                                    }
                                >
                                    삭제
                                </span>
                            </div>
                        )}
                        {deleteSwitch ? (
                            <DeleteBox
                                id={id}
                                title={post.title}
                                deleteSwitch={deleteSwitch}
                                setDeleteSwitch={setDeleteSwitch}
                                history={history}
                            />
                        ) : null}
                    </div>
                </div>
                <section className="post-contents-writing">
                    <span
                        style={{ whiteSpace: "pre-wrap" }}
                        className="writing"
                    >
                        {post.contents}
                    </span>
                </section>
            </section>
        </div>
    );
};

export default PostContents;
