import axios from "axios";

const getPost = () => {
    axios
        .get("/api/posts/read")
        .then((res) => {
            localStorage.setItem("post", JSON.stringify(res.data.reverse()));
        })
        .catch((err) => console.log(err));
};

export default getPost;
