import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.scss";
import { PostType, MypostIprops } from "../../types";
import axios from "axios";

const Mypost: React.FC<MypostIprops> = function (props) {
    const history = useHistory();
    const [post, setPost] = useState<PostType>([
        {
            title: "",
            writer: "",
            days: "",
        },
    ]);
    useEffect(() => {}, []);

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
                                {/* <span className="coment">세부내용..</span> */}
                            </div>
                            <div className="time-table">
                                <span className="day">{days}</span>
                                <div className="text-line"></div>
                                <span className="coment">{writer}</span>
                            </div>
                        </div>
                        {/* <img
                                      className="post-info-image"
                                      src="#"
                                      alt="#"
                                  /> */}
                    </div>
                );
            })}
        </div>
    );
};

export default Mypost;
