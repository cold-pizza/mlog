import "./style.scss";
import Nav from "../nav";

const PostWrite = function () {
    return (
        <div className="post-write">
            <Nav />
            <section className="post-write-box">
                <input type="text" placeholder="제목을 입력하세요." />
                <button>이미지</button>
                {/* 이미지 추가시 생성 */}
                {/* <img src="#" alt="#" /> */}
                <textarea placeholder="내용을 입력하세요."></textarea>
            </section>
        </div>
    );
};

export default PostWrite;
