import "./style.scss";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { PostContentsType } from "../../types";

const UpdatePost = function () {
    const history = useHistory();
    const [titleInput, setTitleInput] = useState("");
    const [contentsInput, setContentsInput] = useState("");
    const [post, setPost] = useState<PostContentsType>({
        title: "",
        writer: "",
        days: "",
        contents: "",
    });

    const updateTitleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleInput(e.target.value);
    };

    const updateOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContentsInput(e.target.value);
    };

    useEffect(() => {
        const apiKeyNickname = decodeURI(
            window.location.pathname.split("/")[4]
        );
        const urlDays = window.location.pathname.split("/")[5];
        const apiKeyDays = urlDays.replace("%20", " ");
        console.log(apiKeyNickname, apiKeyDays);
        axios
            .post("/api/posts-info/read", {
                apiKeyNickname,
                apiKeyDays,
            })
            .then((res) => {
                setPost(res.data);
                console.log(post);
                if (titleInput === "") {
                    setTitleInput(res.data.title);
                }
                if (contentsInput === "") {
                    setContentsInput(res.data.contents);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="update-post">
            <button
                onClick={() => {
                    axios
                        .post("/api/posts/update", {
                            title: titleInput,
                            beforeTitle: post.title,
                            contents: contentsInput,
                            id: JSON.parse(localStorage.user).id,
                        })
                        .then((res) => {
                            alert(res.data);
                            history.push("/");
                        })
                        .catch((err) => console.log(err));
                }}
                className="update-post-btn"
            >
                저장
            </button>
            <section className="update-post-box">
                <input
                    type="text"
                    name="title"
                    value={titleInput}
                    onChange={updateTitleOnChange}
                />
                <span>{contentsInput ? contentsInput.length : null}/500</span>
                <textarea
                    name="contents"
                    value={contentsInput}
                    onChange={updateOnChange}
                />
            </section>
        </div>
    );
};

export default UpdatePost;
