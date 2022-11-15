import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";

const Main = function () {
    const history = useHistory();
    const [profileSwitch, setProfileSwitch] = useState(false);
    return (
        <div className="main">
            <nav className="nav">
                <div className="nav-logo">
                    <img src="/images/mlog-logo.png" alt="#" />
                </div>
                <section className="nav-item">
                    <div className="nav-search">검색</div>
                    <div className="nav-writing">글 쓰기</div>
                    <div
                        className="nav-profile"
                        onClick={() => setProfileSwitch(!profileSwitch)}
                    >
                        프로필
                    </div>
                </section>
                {profileSwitch ? (
                    <ul className="profile-box">
                        <li>내 게시글</li>
                        <li>임시 글</li>
                        <li>즐겨찾기</li>
                        <li>프로필 설정</li>
                        <li
                            onClick={() => {
                                setProfileSwitch(!profileSwitch);
                                history.push("/login");
                            }}
                        >
                            로그인
                        </li>
                    </ul>
                ) : null}
            </nav>
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
