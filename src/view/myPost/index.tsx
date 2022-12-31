/*
코드설명: 내 프로필을 들어가면 내 포스트가 정렬된 컴포넌트.
수정날짜: 2022-12-18
*/

import { useHistory } from "react-router-dom";
import "./style.scss";
import { Iprops } from "../../types";

const Mypost: React.FC<Iprops["MypostProps"]> = function (props) {
    const history = useHistory();
    return (
        <div className="post-list">
            {props.post.map(({ title, writer, days }) => {
                return (
                    <div className="post" key={days}>
                        <div
                            onClick={() =>
                                history.push(`/post/${writer}/${days}`)
                            }
                            className="post-info"
                        >
                            <div className="post-header">
                                <span className="title">{title}</span>
                            </div>
                            <div className="time-table">
                                <span className="day">{days}</span>
                                <div className="text-line"></div>
                                <span className="writer">{writer}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Mypost;
