/*
코드설명: 내 프로필 수정 컴포넌트.
수정날짜: 2023-01-11
*/

import updateNickname from "../../../controller/update/updateNickname";
import "./style.scss";
import { Iprops } from "../../../types";
const MyprofileFixbox: React.FC<Iprops["MyprofileFixboxProps"]> = (props) => {
    const id = JSON.parse(localStorage.user).id;
    const nickName = JSON.parse(localStorage.user).nickName;
    return (
        <div className="myprofile-fix-box">
            <button
                onClick={() => {
                    if (nickName === props.nickNameInput) {
                        props.setFixSwitch(!props.fixSwitch);
                    } else {
                        props.setFixSwitch(!props.fixSwitch);
                        updateNickname(id, props.nickNameInput, nickName);
                    }
                }}
                className="myprofile-fix-btn"
            >
                저장
            </button>
            <button
                className="myprofile-fix-btn"
                onClick={() => {
                    if (props.imgSwitch) {
                        props.setImgSwitch(!props.imgSwitch);
                    }
                    props.setFixSwitch(!props.fixSwitch);
                }}
            >
                취소
            </button>
        </div>
    );
};

export default MyprofileFixbox;
