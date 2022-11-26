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
                const email = res.data.email;
                const profileImg = res.data.profileImg;
                const nickName = res.data.nickName;
                const user = {
                    email,
                    profileImg,
                    nickName,
                };
                localStorage.setItem("user", JSON.stringify(user));
                window.location.reload();
            })

            .catch((err) => console.log(err));
        history.push("/");
    }
};

export default login;
