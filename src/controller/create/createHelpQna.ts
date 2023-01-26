/*
코드기능: 고객센터 문의사항 등록 기능.
생성날짜: 2023-01-26
*/

import axios from "axios";
import { Function } from "../../types";
const createHelpQna: Function["CreateHelpQnaType"] = (
    titles,
    contents,
    writer,
    days
) => {
    axios
        .post("/api/help/create", {
            titles,
            contents,
            writer,
            days,
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
};

export default createHelpQna;
