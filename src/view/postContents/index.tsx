import "./style.scss";
import { useState, useEffect } from "react";
import { PostType } from "../../types";
import Nav from "../nav";

const PostContents = function () {
    const [post, setPost] = useState<PostType>([
        {
            postId: "",
            title: "",
            writer: "",
            days: "",
            contents: "",
            viewCount: 0,
        },
    ]);
    useEffect(() => {
        const localPost = localStorage.getItem("post");
        if (typeof localPost === "string") {
            const post = JSON.parse(localPost);
            setPost(post);
        }
    }, []);
    return (
        <div className="post-contents">
            <Nav />
            <section className="post-contents-box">
                <div className="post-contents-info">
                    <header className="post-contents-title">
                        {post[0].title}
                    </header>
                    <div className="post-conents-meta-info">
                        <span>{post[0].writer}</span>
                        <span>{post[0].days}</span>
                    </div>
                </div>
                {/* <img className="post-contents-image" src="#" alt="#" /> */}
                <section className="post-contents-writing">
                    <span className="writing">{post[0].contents}</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ipsam soluta quisquam repellat aliquid. Omnis, in?
                        Adipisci vel quas facere voluptate similique saepe amet
                        aliquam itaque velit, sapiente debitis. Consequatur,
                        nemo?
                    </span>
                </section>
            </section>
        </div>
    );
};

export default PostContents;
