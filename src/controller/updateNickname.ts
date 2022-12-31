/*
코드기능: 회원id, 변경닉네임, 이전닉네임을 이용해서 닉네임 변경하는 기능.
수정날짜: 2022-12-23
*/

import axios from "axios";
import { Function } from "../types";
const updateNickname: Function["UpdateNicknameType"] = function (
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
                        localStorage.user = JSON.stringify(res.data);
                        console.log("유저 정보 불러오기 성공");
                    })
                    .catch((err) => console.log(err));
            }
        })
        .catch((err) => console.log(err));
};

export default updateNickname;
