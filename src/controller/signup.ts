import axios from "axios";
import { Signup } from "../types";
const signup: Signup = function (nickName, email, pw, tel) {
    const profileNum = Math.floor(Math.random() * 5);
    const id = email + nickName;
    axios
        .post("http://localhost:3010/api/signup-form", {
            id,
            nickName,
            email,
            pw,
            tel,
            profileNum,
        })
        .then((res) => {
            console.log(res.data);
            console.log(JSON.parse(res.config.data));
        })
        .catch((err) => console.log(err));
};

export default signup;
