import "./style.scss";
import { DeleteBoxIprops } from "../../../types";
import deletePost from "../../../controller/deletePost";
const DeleteBox: React.FC<DeleteBoxIprops> = function (props) {
    return (
        <section className="delete-box">
            <p>삭제하시겠습니까?</p>
            <div>
                <button
                    onClick={() => {
                        props.setDeleteSwitch(!props.deleteSwitch);
                        deletePost(props.id, props.title, props.history);
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
