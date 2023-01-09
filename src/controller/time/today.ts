/*
코드기능: 현재 날짜를 구하는 기능.
수정날짜: 2022-12-23
*/

import { Time } from "../../types";
const today: Time["Today"] = function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    let hours: string | number = today.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    const clock = hours + ":" + today.getMinutes();
    return `${year}-${month}-${day} ${clock}`;
};
export default today;
