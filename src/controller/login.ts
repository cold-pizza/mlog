/*
코드기능: 이메일, 비밀번호를 확인하고 로그인 정보를 localstorage에 저장하는 기능.
수정날짜: 2022-12-23
*/

import axios from "axios";
import { Users } from "../types";

const login: Users["LoginType"] = function (email, pw, history) {
    if (!email) {
        alert("이메일을 입력해주세요.");
        return false;
    }
    if (!pw) {
        alert("비밀번호를 입력해주세요.");
        return false;
    } else {
        axios
            .post("/api/users/login", {
                email,
                pw,
            })
            .then((res) => {
                if (res.data === "비밀번호가 다릅니다.") {
                    alert("비밀번호가 다릅니다.");
                    return false;
                } else {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    if (localStorage.user) history.push("/");
                }
            })

            .catch((err) => console.log(err));
    }
};

export default login;
