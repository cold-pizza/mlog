import "./style.scss";

import Nav from "../nav";
import Post from "../post";

const MyProfile = function () {
    const profileImgList = [
        "/images/user-solid.svg",
        "/images/cat-solid.svg",
        "/images/dog-solid.svg",
        "/images/dragon-solid.svg",
        "/images/github.svg",
    ];
    const profileImg = JSON.parse(localStorage.user).profileImg;
    const nickName = JSON.parse(localStorage.user).nickName;
    return (
        <div className="myprofile">
            <Nav />
            <section className="myprofile-box">
                <div className="myprofile-info">
                    <img
                        className="myprofile-image"
                        src={profileImgList[profileImg]}
                        alt="#"
                    />
                    <div className="myprofile-meta-info">
                        <span className="nick-name">{nickName}</span>
                        <span className="coment">코멘트</span>
                    </div>
                </div>
                <section className="my-post-tag">
                    <span className="my-post-logo">내 게시글</span>
                    <div className="gap"></div>
                </section>
                <section className="my-post-list">
                    <Post />
                </section>
            </section>
        </div>
    );
};
export default MyProfile;
