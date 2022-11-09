import "./style.scss";

const Main = function () {
    return (
        <div className="main">
            <nav className="nav">
                <div className="nav-logo">
                    <img src="/images/mlog-logo.png" alt="#" />
                </div>
                <section className="nav-item">
                    <div className="nav-search">검색</div>
                    <div className="nav-writing">글 쓰기</div>
                    <div className="nav-profile">프로필</div>
                </section>
            </nav>
            <span>다양한 MBTI가 모여서 대화하는 블로그입니다.</span>
            <section className="category">카테고리..</section>
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
