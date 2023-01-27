/*
코드설명: 고객센터 컴포넌트.
수정날짜: 2023-01-19
*/

import { useEffect, useState } from "react";
import Nav from "../../nav";
import "./style.scss";
import onChange from "../../../controller/onChange";
import createHelpQna from "../../../controller/create/createHelpQna";
import today from "../../../controller/time/today";
import axios from "axios";
const CustomerCenter = () => {
    const [helpForm, setHelpForm] = useState({
        titles: "",
        contents: "",
    });
    const [helpList, setHelpList] = useState([]);
    const nickName = JSON.parse(localStorage.user).nickName;
    const days = today();
    useEffect(() => {
        axios
            .post("/api/help/get")
            .then((res) => {
                setHelpList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="customer-center-container">
            <Nav />
            <div className="title-container">
                <h1>고객센터</h1>
                <p>궁금한 점은 아래 질문지로 작성해주세요.</p>
            </div>
            <form className="qna-form" action="#">
                <div className="text-form">
                    <input
                        name="titles"
                        onChange={(e) => onChange(e, helpForm, setHelpForm)}
                        type="text"
                        placeholder="제목"
                    />
                    <textarea
                        name="contents"
                        onChange={(e) => onChange(e, helpForm, setHelpForm)}
                        placeholder="질문을 작성해주세요."
                    ></textarea>
                </div>
                <button
                    onClick={() => {
                        createHelpQna(
                            helpForm.titles,
                            helpForm.contents,
                            nickName,
                            days
                        );
                        alert("제출완료.");
                    }}
                    type="button"
                    className="qna-btn"
                >
                    제출
                </button>
            </form>
            <div className="qna-container">
                <p>질문 리스트</p>
                <div className="qna-list">
                    {helpList
                        ? helpList.map(({ titles, writer, days }) => {
                              return (
                                  <div key={days} className="qna-item">
                                      <span className="titles">{titles}</span>
                                      <span className="writer">{writer}</span>
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    );
};

export default CustomerCenter;
