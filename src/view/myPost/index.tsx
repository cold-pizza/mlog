import { useHistory } from "react-router-dom";
import "./style.scss";
import { MypostIprops } from "../../types";

const Mypost: React.FC<MypostIprops> = function (props) {
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
                                <span className="coment">{writer}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Mypost;
