import { useHistory } from "react-router-dom";
import "./style.scss";

const Login = function () {
    const history = useHistory();
    return (
        <div className="login">
            <div className="login-box">
                <header className="login-logo">Mlog</header>
                <form action="#" className="login-form">
                    <input type="email" placeholder="이메일" />
                    <input type="password" placeholder="비밀번호" />
                    <button type="button">로그인</button>
                </form>
                {/* <p className="or">또는</p> */}
                {/* <button className="login-google" type="button">
                    구글 로그인
                </button> */}
                <section className="account-box">
                    <span
                        onClick={() => history.push("/signup")}
                        className="go-signup"
                    >
                        회원가입
                    </span>
                    <div className="find-myAccount">
                        <span className="find-id">계정 찾기</span>
                        <div className="bar"></div>
                        <span className="find-pw">비밀번호 찾기</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
