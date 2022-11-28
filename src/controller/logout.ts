import axios from "axios";
import { Logout } from "../types";
const logout: Logout = function () {
    axios
        .post("http://localhost:3010/api/user/logout")
        .then((res) => {
            alert(res.data);
            localStorage.removeItem("user");
            console.log(res.data);
            window.location.reload();
        })
        .catch((err) => console.log(err));
};

export default logout;
