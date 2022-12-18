import axios from "axios";
import { DeletePostType } from "../types";
const deletePost: DeletePostType = function (id, title, history) {
    axios
        .post("/api/posts/delete", {
            id: id,
            title: title,
        })
        .then((res) => {
            alert(res.data);
            history.push("/");
        })
        .catch((err) => console.log(err));
};

export default deletePost;
