import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

import onChange from "../../controller/onChange";
import signup from "../../controller/signup";
import { PsCheckOnChangeType } from "../../types";

const SignUp = function () {
    const history = useHistory();
    const [psCheckSwitch, setPsCheckSwitch] = useState("none");
    const [signupInput, setSignupInput] = useState({
        nickName: "",
        email: "",
        password: "",
        passwordCheck: "",
        tel: "",
    });
    const { nickName, email, password, tel } = signupInput;
    // console.log("비밀번호 : " + signupInput.password);
    // console.log("비밀번호 확인 : " + signupInput.passwordCheck);

    return (
        <div className="signup">
            <div className="signup-box">
                <header onClick={() => history.replace("/")}>Mlog</header>
                <form action="#" className="signup-form">
                    <input
                        required
                        name="nickName"
                        onChange={(e) =>
                            onChange(e, signupInput, setSignupInput)
                        }
                        type="text"
                        placeholder="닉네임"
                    />
                    <input
                        required
                        name="email"
                        onChange={(e) =>
                            onChange(e, signupInput, setSignupInput)
                        }
                        type="email"
                        placeholder="이메일"
                    />
                    <input
                        required
                        name="password"
                        onChange={(e) =>
                            onChange(e, signupInput, setSignupInput)
                        }
                        type="password"
                        placeholder="비밀번호"
                    />
                    <input
                        name="passwordCheck"
                        onChange={(e) => {
                            onChange(e, signupInput, setSignupInput);
                            if (
                                signupInput.password !==
                                signupInput.passwordCheck
                            ) {
                                setPsCheckSwitch((state) => (state = "block"));
                            } else setPsCheckSwitch("none");
                        }}
                        type="password"
                        placeholder="비밀번호 확인"
                    />
                    <span
                        className="psCheck-no"
                        style={{ display: psCheckSwitch }}
                    >
                        비밀번호가 일치하지 않습니다.
                    </span>

                    <input
                        required
                        name="tel"
                        onChange={(e) =>
                            onChange(e, signupInput, setSignupInput)
                        }
                        type="text"
                        placeholder="전화번호"
                    />
                    <button
                        onClick={() => {
                            signup(nickName, email, password, tel, history);
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
