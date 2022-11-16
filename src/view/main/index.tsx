import "./style.scss";
import Nav from "../nav";
import Post from "../post";

const Main = function () {
    return (
        <div className="main">
            <Nav />
            <span>다양한 MBTI가 모여서 대화하는 블로그입니다.</span>
            <div>⭐️카테고리 추가 예정⭐️</div>
            {/* <section className="category">카테고리..</section> */}
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Main;
