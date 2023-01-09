/*
코드기능: 댓글 생성하는 기능.
생성날짜: 2023-01-09
*/

import axios from "axios";
import { Function } from "../../types";
const createComments: Function["CreateCommentsType"] = (
    title,
    writer,
    days,
    comments,
    postId
) => {
    axios
        .post("/api/posts-comments/create", {
            title: title,
            writer: writer,
            days: days,
            reply: comments,
            replyId: postId,
            images: JSON.parse(localStorage.user).profileImg,
        })
        .then((res) => {
            alert("댓글 달기 성공");
        })
        .catch((err) => console.log(err));
};

export default createComments;
