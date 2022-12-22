import { useEffect } from "react";
import "./style.scss";
import Nav from "../nav";
import MbtiNav from "../mbtiNav";
import Post from "../post";
import axios from "axios";
import getPost from "../../controller/getPost";

axios.defaults.baseURL = `http://localhost:3010`;

const Main = function () {
    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className="main">
            <Nav />
            <MbtiNav />
            <Post />
        </div>
    );
};

export default Main;
