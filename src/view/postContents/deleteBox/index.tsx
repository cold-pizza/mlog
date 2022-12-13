import "./style.scss";
import axios from "axios";
import { DeleteBoxIprops } from "../../../types";
const DeleteBox: React.FC<DeleteBoxIprops> = function (props) {
    return (
        <section className="delete-box">
            <p>삭제하시겠습니까?</p>
            <div>
                <button
                    onClick={() => {
                        props.setDeleteSwitch(!props.deleteSwitch);
                        axios
                            .post("http://localhost:3010/api/post/delete", {
                                id: props.id,
                                title: props.title,
                            })
                            .then((res) => {
                                // console.log(res);
                                alert(res.data);
                                props.history.push("/");
                            })
                            .catch((err) => console.log(err));
                    }}
                >
                    확인
                </button>
                <button
                    onClick={() => props.setDeleteSwitch(!props.deleteSwitch)}
                >
                    취소
                </button>
            </div>
        </section>
    );
};

export default DeleteBox;
