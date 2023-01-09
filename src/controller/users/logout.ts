/*
코드기능: localstorage에 로그인 정보와 mbti포스트를 삭제하는 기능.
수정날짜: 2022-12-23
*/

import axios from "axios";
import { Users } from "../../types";
const logout: Users["LogoutType"] = function (history) {
    axios
        .post("/api/users/logout")
        .then((res) => {
            alert(res.data);
            localStorage.removeItem("user");
            localStorage.removeItem("mbtiPost");
            history.push("/");
        })
        .catch((err) => console.log(err));
};

export default logout;
