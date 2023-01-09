/*
코드기능: 닉네임과 숫자를 이용하여 이미지변경 요청을 하는 기능.
수정날짜: 2022-12-18
*/

import axios from "axios";
import { Function } from "../../types";
const updateProfileImg: Function["UpdateProfileImgType"] = function (
    i,
    id,
    nickName
) {
    axios
        .post("/api/myprofile-image/update", {
            i,
            nickName: nickName,
        })
        .then((res) => {
            if (res.data === "이미지가 변경되었습니다.") {
                alert("이미지가 변경되었습니다.");
                axios
                    .post("/api/myprofile/read", {
                        id: id,
                    })
                    .then((res) => {
                        localStorage.user = JSON.stringify(res.data);
                        console.log("유저 정보 불러오기 성공");
                    })
                    .catch((err) => console.log(err));
            }
        })
        .catch((err) => console.log(err));
};

export default updateProfileImg;
