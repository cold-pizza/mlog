import axios from "axios";
import { Publishing } from "../types";
import today from "./today";

const publishing: Publishing = function (title, contents, history) {
    const postId = JSON.parse(localStorage.user).id;
    const writer = JSON.parse(localStorage.user).nickName;
    const mbti = JSON.parse(localStorage.user).mbti;
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

export default publishing;
