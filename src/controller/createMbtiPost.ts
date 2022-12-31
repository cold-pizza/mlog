/*
코드기능: mbtiNav 카테고리를 클릭하면 해당하는 mbti 포스트를 로컬스토리지에 저장하는 기능.
수정날짜: 2022-12-22
*/
import { Function } from "../types";
const createMbtiPost: Function["CreateMbtiPostType"] = function (mbti) {
    let arr: {}[] = [];
    const postLen = JSON.parse(localStorage.post).length;
    for (let i = 0; i < postLen; i++) {
        const post = JSON.parse(localStorage.post)[i];
        const postMbti = JSON.parse(localStorage.post)[i].mbti;

        if (postMbti.search(mbti) > -1) {
            if (arr.length > 0) {
                arr = [...arr, post];
            } else {
                arr = [post];
            }
        }
    }
    localStorage.setItem("mbtiPost", JSON.stringify(arr));
};

export default createMbtiPost;
