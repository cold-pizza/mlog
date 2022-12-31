/*
코드기능: mbtiNav 카테고리를 클릭하면 해당하는 mbti와 관련된 포스트를 정렬하는 기능.
수정날짜: 2022-12-22
*/

import axios from "axios";
import { Function } from "../types";
const deletePost: Function["DeletePostType"] = function (id, title, history) {
    axios
        .post("/api/posts/delete", {
            id: id,
            title: title,
        })
        .then((res) => {
            alert(res.data);
            history.push("/");
        })
        .catch((err) => console.log(err));
};

export default deletePost;
