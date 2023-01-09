/*
코드기능: 포스트 글에 맞는 댓글 가져오는 기능.
수정날짜: 2023-01-09
*/

import axios from "axios";
import { Function } from "../types";
const getComments: Function["GetCommentsType"] = (replyId, setState) => {
    axios
        .post("/api/posts-comments/read", { replyId: replyId })
        .then((res) => {
            setState(res.data);
        })
        .catch((err) => console.log(err));
};

export default getComments;
