import "./style.scss";

import Nav from "../nav";

const MyProfile = function () {
    return (
        <div className="myprofile">
            <Nav />
            <section className="myprofile-box">
                <div className="myprofile-info">
                    <img src="#" alt="#" />
                    <div className="myprofile-meta-info">
                        <span className="nick-name">닉네임</span>
                        <span className="coment">코멘트</span>
                    </div>
                </div>
                <section className="my-post">
                    <span className="my-post-logo">내 게시글</span>
                    <div className="gap"></div>
                </section>
                <section className="my-post-list">
                    <div className="my-post">
                        <div className="my-post-info">
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
            </section>
        </div>
    );
};
export default MyProfile;
