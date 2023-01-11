/*
코드설명: 내 프로필 수정버튼 누르면 나오는 수정 컴포넌트.
수정날짜: 2023-01-11
*/

import "./style.scss";
import { Iprops } from "../../../types";
const Fixbox: React.FC<Iprops["FixboxProps"]> = (props) => {
    const nickName = JSON.parse(localStorage.user).nickName;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setNickNameInput(e.target.value);
    };
    return (
        <div className="fix-box">
            <input
                value={props.nickNameInput}
                className="nick-name-input"
                onChange={onChange}
                type="text"
                placeholder={nickName}
                name="nickName"
            />
            <button
                onClick={() => {
                    props.setImgSwitch(!props.imgSwitch);
                }}
                className="myprofile-image-fix-btn"
            >
                이미지 변경
            </button>
        </div>
    );
};

export default Fixbox;
