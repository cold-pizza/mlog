import axios from "axios";
import { Signup } from "../types";
const signup: Signup = function (nickName, email, pw, pwCheck, tel, history) {
    const profileNum = Math.floor(Math.random() * 5);
    const id = email + nickName;
    const spe = pw.search(/[!@#$%^&*]/gi);
    const num = pw.search(/[0-9]/g);
    const eng = pw.search(/[a-z]/gi);
    if (pw.length < 7 || pw.length > 16) {
        alert("비밀번호를 6 ~ 16자리 이내로 입력해주세요.");
        return false;
    } else if (
        (spe < 0 && num < 0) ||
        (spe < 0 && eng < 0) ||
        (num < 0 && eng < 0)
    ) {
        alert("영문, 숫자, 특수문자 중 2가지 이상 혼합하여 입력해주세요.");
        return false;
    }
    if (pw !== pwCheck) {
        alert("비밀번호가 다릅니다.");
        return false;
    } else {
        axios
            .post("/api/users/signup", {
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
    }
};

export default signup;
