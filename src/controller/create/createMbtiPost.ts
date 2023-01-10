/*
코드기능: mbtiNav 카테고리를 클릭하면 해당하는 mbti 포스트를 로컬스토리지에 저장하는 기능.
수정날짜: 2022-12-22
*/

import { Function } from "../../types";
const createMbtiPost: Function["CreateMbtiPostType"] = function (mbti, post) {
    let arr: {}[] = [];
    for (let i = 0; i < post.length; i++) {
        const postMbti = post[i].mbti;
        if (postMbti.search(mbti) > -1) {
            if (arr.length > 0) {
                arr = [...arr, post[i]];
            } else {
                arr = [post[i]];
            }
        }
    }
    localStorage.setItem("mbtiPost", JSON.stringify(arr));
};

export default createMbtiPost;
