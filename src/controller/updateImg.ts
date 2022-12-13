import axios from "axios";
import { UpdateProfileImgType } from "../types";

const updateProfileImg: UpdateProfileImgType = function (i, id, nickName) {
    axios
        .post("http://localhost:3010/api/post/myprofile-img", {
            i,
            nickName: nickName,
        })
        .then((res) => {
            console.log(res.data);
            if (res.data === "이미지가 변경되었습니다.") {
                alert("이미지가 변경되었습니다.");
                axios
                    .post("http://localhost:3010/api/post/myprofile", {
                        id: id,
                    })
                    .then((res) => {
                        console.log(res.data);
                        localStorage.user = JSON.stringify(res.data);
                        console.log("유저 정보 불러오기 성공");
                    })
                    .catch((err) => console.log(err));
            }
        })
        .catch((err) => console.log(err));
};

export default updateProfileImg;
