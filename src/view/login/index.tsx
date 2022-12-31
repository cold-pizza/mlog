/*
코드설명: 로그인 할 수 있는 컴포넌트.
수정날짜: 2022-12-18
*/

import { useState } from "react";
import { useHistory } from "react-router-dom";
import onChange from "../../controller/onChange";
import login from "../../controller/login";
import "./style.scss";

const Login = function () {
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const history = useHistory();
    return (
        <div className="login">
            <div className="login-box">
                <header
                    onClick={() => history.push("/")}
                    className="login-logo"
                >
                    mlog
                </header>
                <form className="login-form" method="POST">
                    <input
                        onChange={(e) => onChange(e, loginInput, setLoginInput)}
                        name="email"
                        type="email"
                        placeholder="이메일"
                    />
                    <input
                        onChange={(e) => onChange(e, loginInput, setLoginInput)}
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                    />
                    <button
                        className="login-btn"
                        onClick={() =>
                            login(
                                loginInput.email,
                                loginInput.password,
                                history
                            )
                        }
                        type="button"
                    >
                        로그인
                    </button>
                </form>
                <section className="account-box">
                    <span
                        onClick={() => history.push("/signup")}
                        className="go-signup"
                    >
                        회원가입
                    </span>
                    <div className="find-myAccount"></div>
                </section>
            </div>
        </div>
    );
};

export default Login;
