/*
코드기능: 내 포스트 불러오는 기능.
생성날짜: 2023-01-11
*/

import axios from "axios";
import { Function } from "../../types";
const getMypost: Function["GetMypostType"] = (nickName, setState) => {
    axios
        .post("/api/mypost/read", { writer: nickName })
        .then((res) => {
            setState(res.data);
        })
        .catch((err) => console.log(err));
};
export default getMypost;
