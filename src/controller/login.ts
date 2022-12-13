import axios from "axios";
import { Login } from "../types";

const login: Login = function (email, pw, history) {
    if (!email) alert("이메일을 입력해주세요.");
    if (!pw) alert("비밀번호를 입력해주세요.");
    else {
        axios
            .post("http://localhost:3010/api/user/login", {
                email,
                pw,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data === "비밀번호가 다릅니다.") {
                    alert("비밀번호가 다릅니다.");
                    return;
                } else {
                    const id = res.data.id;
                    const email = res.data.email;
                    const profileImg = res.data.profileImg;
                    const nickName = res.data.nickName;
                    const user = {
                        id,
                        email,
                        profileImg,
                        nickName,
                    };
                    localStorage.setItem("user", JSON.stringify(user));
                    if (localStorage.user) history.push("/");
                }
            })

            .catch((err) => console.log(err));
    }
};

export default login;
