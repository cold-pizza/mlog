import { useHistory } from "react-router";
import { useState } from "react";
import "./style.scss";

import logout from "../../controller/logout";

const Nav = function () {
    const profileImgList = [
        "/images/user-solid.svg",
        "/images/cat-solid.svg",
        "/images/dog-solid.svg",
        "/images/dragon-solid.svg",
        "/images/github.svg",
    ];
    const history = useHistory();
    const [profileSwitch, setProfileSwitch] = useState(false);
    const pathName = window.location.pathname;

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
                {pathName === "/postwrite" ? (
                    <div>글 쓰는중</div>
                ) : (
                    <div
                        className="nav-writing"
                        onClick={() => history.push("/postwrite")}
                    >
                        글 쓰기
                    </div>
                )}
                {localStorage.user ? (
                    <img
                        onClick={() => setProfileSwitch(!profileSwitch)}
                        className="profile-image"
                        src={
                            profileImgList[
                                JSON.parse(localStorage.user).profileImg
                            ]
                        }
                        alt="#"
                    />
                ) : (
                    <div
                        className="nav-profile"
                        onClick={() => setProfileSwitch(!profileSwitch)}
                    >
                        프로필
                    </div>
                )}
            </section>
            {profileSwitch ? (
                <ul className="profile-box">
                    {/* <li>임시 글</li> */}
                    {/* <li>즐겨찾기</li> */}
                    <li
                        onClick={() => {
                            if (!localStorage.user) {
                                alert("로그인 해주세요.");
                            } else {
                                setProfileSwitch(!profileSwitch);
                                history.push("/myprofile");
                            }
                        }}
                    >
                        내 프로필
                    </li>
                    {!localStorage.user ? (
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
                    ) : (
                        <li
                            onClick={() => {
                                logout();
                            }}
                        >
                            로그아웃
                        </li>
                    )}
                </ul>
            ) : null}
        </div>
    );
};

export default Nav;
