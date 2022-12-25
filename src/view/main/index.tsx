import { useEffect } from "react";
import "./style.scss";
import Nav from "../nav";
import MbtiNav from "../mbtiNav";
import Post from "../post";
import getPost from "../../controller/getPost";

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
