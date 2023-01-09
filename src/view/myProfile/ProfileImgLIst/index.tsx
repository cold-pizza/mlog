/*
코드설명: 기본이미지 5개를 정렬하고 변경할 이미지를 선택하는 컴포넌트.
수정날짜: 2022-12-26
*/

import "./style.scss";
import { Iprops } from "../../../types";
import updateImg from "../../../controller/update/updateImg";
import { useSelector } from "react-redux";

const ProfileImgList: React.FC<Iprops["ProfileImgListProps"]> = function (
    props
) {
    const profileImgList = useSelector(
        (state: { imageSlice: string[] }) => state.imageSlice
    );

    return (
        <div className="profile-img-list">
            <span>이미지를 선택해주세요.</span>
            {profileImgList.map((list, i) => {
                return (
                    <img
                        onClick={() => {
                            updateImg(i, props.id, props.nickName);
                        }}
                        key={list}
                        className="profile-img-list"
                        src={list}
                        alt={list}
                    />
                );
            })}
        </div>
    );
};

export default ProfileImgList;
