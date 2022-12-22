import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import createMbtiPost from "../../controller/createMbtiPost";
import "./style.scss";

const MbtiNav = function () {
    const history = useHistory();
    const [mbti, setMbti] = useState("");
    const mbtiList = [
        ["I", "E"],
        ["S", "N"],
        ["T", "F"],
        ["P", "J"],
    ];
    useEffect(() => {
        const mbti = window.location.pathname.split("/")[3];
        setMbti(mbti);
    }, []);

    return (
        <div className="mbti-nav">
            <section className="mbti-category">
                {mbtiList.map((list) => {
                    return (
                        <div key={list.toString()} className="mbti-line">
                            <p
                                onClick={() => {
                                    createMbtiPost(list[0]);
                                    history.push(`/mbti/${list[0]}`);
                                    window.location.reload();
                                }}
                            >
                                {list[0]}
                            </p>
                            <p
                                onClick={() => {
                                    createMbtiPost(list[1]);
                                    history.push(`/mbti/${list[1]}`);
                                    window.location.reload();
                                }}
                            >
                                {list[1]}
                            </p>
                        </div>
                    );
                })}
            </section>
            <span className="mbti-post">{mbti} 게시글</span>
        </div>
    );
};

export default MbtiNav;
