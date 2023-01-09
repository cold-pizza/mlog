/*
코드기능: 포스트 클릭시 조회수 증가하는 기능.
수정날짜: 2023-01-03
*/

import axios from "axios";
import { Function } from "../../types";
const updateViewCount: Function["UpdateViewCountType"] = (
    days,
    writer,
    viewCount
) => {
    axios
        .post("/api/posts/view-count/update", {
            days: days,
            writer: writer,
            viewCount: viewCount + 1,
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
};

export default updateViewCount;
