/*
코드기능: 문자열로 저장된 날짜를 배열로 변환하는 기능.
수정날짜: 2022-12-23
*/

import { Time } from "../types";
const getToday: Time["GetTodayType"] = function (days) {
    let timeArr = [];
    const time = days.split(" ");
    if (time.length >= 2) {
        const front = time[0].split("-");
        const back = time[1].split(":");
        const year = Number(front[0]);
        const month = Number(front[1]) - 1;
        const day = Number(front[2]);
        let times = Number(back[0]);
        const min = Number(back[1]);
        timeArr = [year, month, day, times, min];
        return timeArr;
    } else return [];
};

export default getToday;
