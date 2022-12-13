import axios from "axios";
import { UpdateNicknameType } from "../types";
const updateNickname: UpdateNicknameType = function (id, nickName) {
    axios
        .post("http://localhost:3010/api/post/myprofile-nickname", {
            id,
            nickName,
        })
        .then((res) => {
            console.log(res);
            if (res.data === "닉네임이 변경되었습니다.") {
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

export default updateNickname;
