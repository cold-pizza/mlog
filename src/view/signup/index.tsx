import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

import onChange from "../../controller/onChange";
import signup from "../../controller/signup";

const SignUp = function () {
    const history = useHistory();

    const [signupInput, setSignupInput] = useState({
        nickName: "",
        email: "",
        password: "",
        passwordCheck: "",
        tel: "",
    });
    const { nickName, email, password, passwordCheck, tel } = signupInput;

    const inputList = [
        { name: "nickName", type: "text", placeHolder: "닉네임" },
        { name: "email", type: "email", placeHolder: "이메일" },
        { name: "password", type: "password", placeHolder: "비밀번호" },
        {
            name: "passwordCheck",
            type: "password",
            placeHolder: "비밀번호 확인",
        },
        { name: "tel", type: "text", placeHolder: "전화번호" },
    ];

    return (
        <div className="signup">
            <div className="signup-box">
                <header onClick={() => history.replace("/")}>mlog</header>
                <form action="#" className="signup-form">
                    {inputList.map(({ name, type, placeHolder }) => {
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
