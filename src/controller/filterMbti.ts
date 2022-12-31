/*
코드기능: 회원가입시 작성한 mbti가 중복되거나 이외의 단어가 들어갔는지 확인하는 기능.
수정날짜: 2022-12-23
*/

import { Function } from "../types";
const filterMbti: Function["FilterMbtiType"] = function (mbti) {
    const mbtiList = "IENSTFJP";
    for (let i = 0; i < 4; i++) {
        const count = mbtiList.search(mbti[i]);
        if (count < 0) {
            return false;
        } else if (mbti[i - 1] === mbti[i]) {
            return false;
        } else console.log(count);
    }

    return true;
};
export default filterMbti;
// export signup.ts;
