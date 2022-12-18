import "./style.scss";
import { ProfileImgListIprops } from "../../../types";
import updateImg from "../../../controller/updateImg";

const ProfileImgList: React.FC<ProfileImgListIprops> = function (props) {
    const profileImgList = [
        "/images/user-solid.svg",
        "/images/cat-solid.svg",
        "/images/dog-solid.svg",
        "/images/dragon-solid.svg",
        "/images/github.svg",
    ];
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
