import "./style.scss";
import { useHistory } from "react-router";

const Post = function () {
    const history = useHistory();
    return (
        <section className="post-list">
            <div className="post">
                <div
                    onClick={() => history.push("/postcontents")}
                    className="post-info"
                >
                    <div className="post-header">
                        <span className="title">제목</span>
                        <span className="coment">세부내용..</span>
                    </div>
                    <div className="time-table">
                        <span className="day">2022년 11월 05일</span>
                        <div className="text-line"></div>
                        <span className="coment">댓글 0</span>
                    </div>
                </div>
                <img className="post-info-image" src="#" alt="#" />
            </div>
        </section>
    );
};
export default Post;
