import "./style.scss";
import { useState, useEffect } from "react";
import Nav from "../nav";
import axios from "axios";

type PostContentsType = {
    title: string;
    writer: string;
    days: string;
    contents: string;
};

const PostContents = function () {
    const [post, setPost] = useState<PostContentsType>({
        title: "",
        writer: "",
        days: "",
        contents: "",
    });
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
                    <div className="post-conents-meta-info">
                        <span>{post.writer}</span>
                        <span>{post.days}</span>
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
