import { useHistory } from "react-router";
import "./style.scss";

const SignUp = function () {
    const history = useHistory();
    return (
        <div className="signup">
            <div className="signup-box">
                <header onClick={() => history.replace("/")}>Mlog</header>
                <form action="#" className="signup-form">
                    <input type="text" placeholder="닉네임" />
                    <input type="email" placeholder="이메일" />
                    <input type="password" placeholder="비밀번호" />
                    <input type="password" placeholder="비밀번호 확인" />
                    {/* <span>비밀번호가 일치하지 않습니다.</span>
                    <span>비밀번호가 일치합니다!</span> */}
                    <input type="text" placeholder="전화번호" />
                    <button className="signup-btn" type="button">
                        완료
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
