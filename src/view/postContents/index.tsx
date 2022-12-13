import "./style.scss";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Nav from "../nav";
import axios from "axios";
import { PostContentsType } from "../../types";
import DeleteBox from "./deleteBox";

const PostContents = function () {
    const history = useHistory();
    const id = localStorage.user ? JSON.parse(localStorage.user).id : 0;
    const usersName = localStorage.user
        ? JSON.parse(localStorage.user).nickName
        : null;
    // console.log(usersName);
    const [deleteSwitch, setDeleteSwitch] = useState(false);
    const [post, setPost] = useState<PostContentsType>({
        title: "",
        writer: "",
        days: "",
        contents: "",
    });
    // console.log(post.writer);
    useEffect(() => {
        const localPost = localStorage.getItem("post");
        if (typeof localPost === "string") {
            const post = JSON.parse(localPost);
            setPost(post);
        }
        const apiKeyNickname = decodeURI(
            window.location.pathname.split("/")[2]
        );
        const urlDays = window.location.pathname.split("/")[3];
        const apiKeyDays = urlDays.replace("%20", " ");
        axios
            .post("http://localhost:3010/api/post/contents", {
                apiKeyNickname,
                apiKeyDays,
            })
            .then((res) => setPost(res.data))
            .catch((err) => console.log(err));
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
                                <span>수정</span>
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
                {/* <img className="post-contents-image" src="#" alt="#" /> */}
                <section className="post-contents-writing">
                    <span className="writing">{post.contents}</span>
                </section>
            </section>
        </div>
    );
};

export default PostContents;
