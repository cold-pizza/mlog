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
import readPostInfo from "../../controller/get/getPostInfo";
import Comments from "./comments";
import onChange from "../../controller/onChange";
import createComments from "../../controller/create/createComments";
import today from "../../controller/time/today";

const PostContents = function () {
    const [comments, setComments] = useState({ comments: "" });
    const history = useHistory();
    const id = localStorage.user ? JSON.parse(localStorage.user).id : 0;
    const usersName = localStorage.user
        ? JSON.parse(localStorage.user).nickName
        : null;
    const [deleteSwitch, setDeleteSwitch] = useState(false);
    const [post, setPost] = useState<State["PostContentsType"]>({
        postId: "",
        title: "",
        writer: "",
        days: "",
        contents: "",
        viewCount: 0,
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
                            <div className="line"></div>
                            <span className="days">{post.days}</span>
                            <div className="line"></div>
                            <span>view {post.viewCount}</span>
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
                <section className="post-contents-area">
                    <span
                        style={{ whiteSpace: "pre-wrap" }}
                        className="contents"
                    >
                        {post.contents}
                    </span>
                </section>
            </section>
            <section className="comment-container">
                <div className="line"></div>
                <span className="comment-count">0개의 댓글</span>
                <form className="comment-form" action="#">
                    <span className="writer">{usersName}</span>
                    <textarea
                        name="comments"
                        onChange={(e) => onChange(e, comments, setComments)}
                        placeholder="의견을 공유해주세요."
                    />
                    <button
                        onClick={() => {
                            if (!localStorage.user) {
                                alert("로그인 해주세요.");
                                return false;
                            } else if (comments.comments.length <= 0) {
                                alert("댓글을 작성해주세요.");
                                return false;
                            } else
                                createComments(
                                    post.title,
                                    usersName,
                                    today(),
                                    comments.comments,
                                    post.postId
                                );
                        }}
                        className="comment-btn"
                    >
                        댓글 쓰기
                    </button>
                </form>
                <ul className="comment-list">
                    {post.postId ? (
                        <Comments
                            comments={comments.comments}
                            replyId={post.postId}
                        />
                    ) : null}
                </ul>
            </section>
        </div>
    );
};

export default PostContents;
