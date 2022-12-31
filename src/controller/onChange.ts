/*
코드기능: 입력된 문자들을 바로 setState에 저장하는 기능.
수정날짜: 2022-12-23
*/

import { OnChange } from "../types";

const onChange: OnChange["OnChange"] = (e, state, setState) => {
    setState({ ...state, [e.target.name]: e.target.value });
};

export default onChange;
