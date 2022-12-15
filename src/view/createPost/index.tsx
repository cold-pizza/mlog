import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import Nav from "../nav";

import onChange from "../../controller/onChange";
import publishing from "../../controller/publishing";

const PostWrite = function () {
    const history = useHistory();
    const [post, setPost] = useState({ title: "", contents: "" });
    let contentsLen = post.contents.length;
    return (
        <div className="post-write">
            <Nav />
            <button
                className="create-btn"
                onClick={() => {
                    if (post.title.length <= 0 || contentsLen <= 0) {
                        alert("내용을 입력해주세요.");
                    } else if (contentsLen >= 500) {
                        alert("가용 텍스트를 초과했습니다.");
                    } else publishing(post.title, post.contents, history);
                }}
            >
                발행
            </button>
            <section className="post-write-box">
                <input
                    onChange={(e) => {
                        onChange(e, post, setPost);
                    }}
                    name="title"
                    type="text"
                    placeholder="제목을 입력하세요."
                />
                {/* <button>이미지</button> */}
                {/* 이미지 추가시 생성 */}
                {/* <img src="#" alt="#" /> */}
                <span className="text-length">{contentsLen}/500</span>
                <textarea
                    onChange={(e) => {
                        onChange(e, post, setPost);
                    }}
                    name="contents"
                    placeholder="내용을 입력하세요."
                ></textarea>
            </section>
        </div>
    );
};

export default PostWrite;