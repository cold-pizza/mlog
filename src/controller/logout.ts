import axios from "axios";
import { Logout } from "../types";
const logout: Logout = function (history) {
    axios
        .post("http://localhost:3010/api/logout")
        .then((res) => {
            console.log("로그아웃 되었습니다.");
            console.log(res.data);
            localStorage.removeItem("user");
            history.replace("/");
        })
        .catch((err) => console.log(err));
};

export default logout;
