import axios from "axios";
import { UpdateNicknameType } from "../types";
const updateNickname: UpdateNicknameType = function (
    id,
    nickName,
    beforeNickname
) {
    axios
        .post("/api/myprofile-nickname/update", {
            id,
            nickName,
        })
        .then((res) => {
            console.log(res);
            if (res.data === "닉네임이 변경되었습니다.") {
                axios
                    .post("/api/posts-writer/update", {
                        beforeNickname,
                        nickName,
                    })
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err));
                axios
                    .post("/api/myprofile/read", {
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

export default updateNickname;
