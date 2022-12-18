import axios from "axios";
import { ReadPostInfoType } from "../types";

const readPostInfo: ReadPostInfoType = function (nickName, days, setPost) {
    axios
        .post("/api/posts-info/read", {
            apiKeyNickname: nickName,
            apiKeyDays: days,
        })
        .then((res) => setPost(res.data))
        .catch((err) => console.log(err));
};

export default readPostInfo;
