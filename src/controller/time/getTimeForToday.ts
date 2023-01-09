/*
코드기능: 포스트 게시날짜를 좀 더 가시적으로 변경하는 기능.
수정날짜: 2022-12-23
*/

import { Time } from "../../types";
const getTimeForToday: Time["GetTimeForTodayType"] = function (value) {
    const today = new Date();
    const timeValue = new Date(
        value[0],
        value[1],
        value[2],
        value[3],
        value[4]
    );

    const betweenTime = Math.floor(
        (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 32) {
        return `${betweenTimeDay}일전`;
    }
    const betweenTimeMonth = Math.floor(betweenTimeDay / 30);
    if (betweenTimeMonth < 13) {
        return `${betweenTimeMonth}달전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
};

export default getTimeForToday;
