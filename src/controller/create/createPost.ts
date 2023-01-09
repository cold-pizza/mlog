/*
코드기능: 회원정보와 포스트작성글을 POST요청해서 발행하는 기능.
수정날짜: 2023-01-09
수정내용: 함수명 publising -> createPost
*/

import axios from "axios";
import { Function } from "../../types";
import today from "../time/today";

const createPost: Function["CreatePostType"] = function (
    title,
    contents,
    history
) {
    const writer = JSON.parse(localStorage.user).nickName;
    const mbti = JSON.parse(localStorage.user).mbti;
    const rNum = Math.floor(Math.random() * 10000);
    const postId = title.length * 99 * contents.length * writer.length + rNum;
    let days = today();
    axios
        .post("/api/posts/create", {
            postId,
            title,
            writer,
            days,
            contents,
            mbti,
        })
        .then((res) => {
            console.log(res.data);
            alert("발행되었습니다.");
            history.push("/");
        })
        .catch((err) => console.log(err));
};

export default createPost;
