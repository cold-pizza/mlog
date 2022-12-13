import axios from "axios";
import { Signup } from "../types";
const signup: Signup = function (nickName, email, pw, tel, history) {
    const profileNum = Math.floor(Math.random() * 5);
    const id = email + nickName;
    axios
        .post("http://localhost:3010/api/user/signup", {
            id,
            nickName,
            email,
            pw,
            tel,
            profileNum,
        })
        .then((res) => {
            console.log(res.data);
            // console.log(JSON.parse(res.config.data)); <-- 회원정보
            alert("회원가입이 완료되었습니다.");
            history.push("/");
        })
        .catch((err) => console.log(err));
};

export default signup;
