import axios from "axios";
import { Login } from "../types";

const login: Login = function (email, pw, history) {
    if (!email) alert("이메일을 입력해주세요.");
    if (!pw) alert("비밀번호를 입력해주세요.");
    else {
        axios
            .post("http://localhost:3010/api/login-form", {
                email,
                pw,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
        // console.log("로그인 성공");
        // localStorage.setItem("user", JSON.stringify(res.data));
        // console.log(res.data);
        history.push("/");
    }
};

export default login;
