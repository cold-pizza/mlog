/*
코드설명: 내 포스트를 삭제하는 컴포넌트.
수정날짜: 2022-12-22
*/

import "./style.scss";
import { Iprops } from "../../../types";
import deletePost from "../../../controller/deletePost";
const DeleteBox: React.FC<Iprops["DeleteBoxProps"]> = function (props) {
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
