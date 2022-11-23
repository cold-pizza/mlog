import { useHistory } from "react-router";
import { useState } from "react";
import "./style.scss";

const Nav = function () {
    const history = useHistory();
    const [profileSwitch, setProfileSwitch] = useState(false);
    return (
        <div className="nav">
            <div onClick={() => history.push("/")} className="nav-logo">
                <img src="/images/mlog-logo.png" alt="#" />
            </div>
            <section className="nav-item">
                <div
                    className="nav-search"
                    onClick={() => history.push("/search")}
                >
                    검색
                </div>
                <div
                    className="nav-writing"
                    onClick={() => history.push("/postwrite")}
                >
                    글 쓰기
                </div>
                <div
                    className="nav-profile"
                    onClick={() => setProfileSwitch(!profileSwitch)}
                >
                    프로필
                </div>
            </section>
            {profileSwitch ? (
                <ul className="profile-box">
                    {/* <li>임시 글</li> */}
                    {/* <li>즐겨찾기</li> */}
                    <li
                        onClick={() => {
                            setProfileSwitch(!profileSwitch);
                            history.push("/myprofile");
                        }}
                    >
                        내 프로필
                    </li>
                    <li
                        onClick={() => {
                            if (localStorage.user) {
                                alert("이미 로그인 되었습니다.");
                                return;
                            } else {
                                setProfileSwitch(!profileSwitch);
                                history.push("/login");
                            }
                        }}
                    >
                        로그인
                    </li>
                    <li
                        onClick={() => {
                            localStorage.clear();
                            history.push("/login");
                        }}
                    >
                        로그아웃
                    </li>
                </ul>
            ) : null}
        </div>
    );
};

export default Nav;
