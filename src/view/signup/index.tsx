/*
코드설명: 닉네임, 이메일, 비밀번호, 비밀번호확인란, 전화번호, mbti 등을 작성하는 회원가입 컴포넌트.
수정날짜: 2022-12-19
*/

import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import onChange from "../../controller/onChange";
import signup from "../../controller/users/signup";

const SignUp = function () {
    const history = useHistory();
    const [signupInput, setSignupInput] = useState({
        nickName: "",
        email: "",
        password: "",
        passwordCheck: "",
        tel: "",
        mbti: "",
    });
    const { nickName, email, password, passwordCheck, tel, mbti } = signupInput;

    const inputList = [
        { name: "nickName", type: "text", placeHolder: "닉네임", maxLength: 8 },
        { name: "email", type: "email", placeHolder: "이메일", maxLength: 22 },
        {
            name: "password",
            type: "password",
            placeHolder: "비밀번호",
            maxLength: 16,
        },
        {
            name: "passwordCheck",
            type: "password",
            placeHolder: "비밀번호 확인",
            maxLength: 16,
        },
        { name: "tel", type: "text", placeHolder: "전화번호", maxLength: 8 },
        { name: "mbti", type: "text", placeHolder: "mbti", maxLength: 4 },
    ];

    return (
        <div className="signup">
            <div className="signup-box">
                <header onClick={() => history.replace("/")}>mlog</header>
                <form action="#" className="signup-form">
                    {inputList.map(({ name, type, placeHolder, maxLength }) => {
                        return (
                            <input
                                key={placeHolder}
                                required
                                name={name}
                                onChange={(e) =>
                                    onChange(e, signupInput, setSignupInput)
                                }
                                type={type}
                                placeholder={placeHolder}
                                maxLength={maxLength}
                            />
                        );
                    })}
                    <button
                        onClick={() => {
                            signup(
                                nickName,
                                email,
                                password,
                                passwordCheck,
                                tel,
                                mbti.toUpperCase(),
                                history
                            );
                        }}
                        className="signup-btn"
                        type="button"
                    >
                        완료
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
