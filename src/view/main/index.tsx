import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import Nav from "../nav";

const Main = function () {
    const history = useHistory();
    const [profileSwitch, setProfileSwitch] = useState(false);
    return (
        <div className="main">
            <Nav />
            <span>다양한 MBTI가 모여서 대화하는 블로그입니다.</span>
            <div>⭐️카테고리 추가 예정⭐️</div>
            {/* <section className="category">카테고리..</section> */}
            <section className="post-list">
                <div className="post">
                    <div className="post-info">
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
                <div className="post">
                    <div className="post-info">
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
                <div className="post">
                    <div className="post-info">
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
                <div className="post">
                    <div className="post-info">
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
        </div>
    );
};

export default Main;
