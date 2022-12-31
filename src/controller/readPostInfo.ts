/*
코드기능: 닉네임과 날짜로 해당 포스트의 글을 가져오는 기능.
수정날짜: 2022-12-19
*/

import axios from "axios";
import { Function } from "../types";

const readPostInfo: Function["ReadPostInfoType"] = function (
    nickName,
    days,
    setPost
) {
    axios
        .post("/api/posts-info/read", {
            apiKeyNickname: nickName,
            apiKeyDays: days,
        })
        .then((res) => {
            setPost(res.data);
        })
        .catch((err) => console.log(err));
};

export default readPostInfo;
