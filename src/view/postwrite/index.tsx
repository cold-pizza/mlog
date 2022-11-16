import "./style.scss";
import Nav from "../nav";

const PostWrite = function () {
    return (
        <div className="post-wirte">
            <Nav />
            <section className="post-write-box">
                <input type="text" placeholder="제목을 입력하세요." />
                <button>이미지</button>
                <img src="#" alt="#" />
                <textarea placeholder="내용을 입력하세요."></textarea>
            </section>
        </div>
    );
};

export default PostWrite;
