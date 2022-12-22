import axios from "axios";
import { Logout } from "../types";
const logout: Logout = function (history) {
    axios
        .post("/api/users/logout")
        .then((res) => {
            alert(res.data);
            localStorage.removeItem("user");
            localStorage.removeItem("mbtiPost");
            console.log(res.data);
            // window.location.reload();
            history.push("/");
        })
        .catch((err) => console.log(err));
};

export default logout;
