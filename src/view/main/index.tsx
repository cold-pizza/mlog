import { useEffect } from "react";
import "./style.scss";
import Nav from "../nav";
import Post from "../post";
import axios from "axios";

axios.defaults.baseURL = `http://localhost:3010`;

const Main = function () {
    useEffect(() => {
        axios
            .get("/api/posts/read")
            .then((res) => {
                localStorage.setItem(
                    "post",
                    JSON.stringify(res.data.reverse())
                );
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="main">
            <Nav />
            <Post />
        </div>
    );
};

export default Main;
