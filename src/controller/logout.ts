import axios from "axios";
import { Users } from "../types";
const logout: Users["LogoutType"] = function (history) {
    axios
        .post("/api/users/logout")
        .then((res) => {
            alert(res.data);
            localStorage.removeItem("user");
            localStorage.removeItem("mbtiPost");
            console.log(res.data);
            history.push("/");
        })
        .catch((err) => console.log(err));
};

export default logout;
