/*
코드설명: 고객센터 컴포넌트.
수정날짜: 2023-01-19
*/

import Nav from "../../nav";
import "./style.scss";
const CustomerCenter = () => {
    return (
        <div className="customer-center-container">
            <Nav />
            <div className="title-container">
                <h1>고객센터</h1>
                <p>궁금한 점은 아래 질문지로 작성해주세요.</p>
            </div>
            <form className="qna-form" action="#">
                <div className="text-form">
                    <input type="text" placeholder="제목" />
                    <textarea placeholder="질문을 작성해주세요."></textarea>
                </div>
                <button type="button" className="qna-btn">
                    제출
                </button>
            </form>
            <div className="qna-container">
                <p>질문 리스트</p>
                <div className="qna-list">
                    <div className="qna-item">
                        <span className="titles">제목</span>
                        <span className="writer">작성자</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerCenter;
