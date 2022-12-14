import "./style.scss";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router";
import axios from "axios";
import Nav from "../nav";
import Mypost from "../myPost";
import { PostType } from "../../types";
import onChange from "../../controller/onChange";

import ProfileImgList from "./ProfileImgLIst";
import updateNickname from "../../controller/updateNickname";

const MyProfile = function () {
    const profileImg = JSON.parse(localStorage.user).profileImg;
    const nickName = JSON.parse(localStorage.user).nickName;
    const id = JSON.parse(localStorage.user).id;
    const [fixSwitch, setFixSwitch] = useState(false);
    const [imgSwitch, setImgSwitch] = useState(false);
    const [nickNameInput, setNickNameInput] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickNameInput(e.target.value);
    };

    const [post, setPost] = useState<PostType>([
        {
            title: "",
            writer: "",
            days: "",
        },
    ]);

    useEffect(() => {
        if (nickNameInput === "") {
            setNickNameInput(nickName);
        }
        axios
            .post("http://localhost:3010/api/post/mypost", { id })
            .then((res) => {
                console.log(res.data[0]);
                setPost(res.data);
                // setNickNameInput(res.data[0].writer);
            })
            .catch((err) => console.log(err));
    }, []);

    const profileImgList = [
        "/images/user-solid.svg",
        "/images/cat-solid.svg",
        "/images/dog-solid.svg",
        "/images/dragon-solid.svg",
        "/images/github.svg",
    ];

    return (
        <div className="myprofile">
            <Nav />
            <section className="myprofile-box">
                <div className="myprofile-info">
                    <div className="myprofile-meta-info">
                        <img
                            className="myprofile-image"
                            src={profileImgList[profileImg]}
                            alt="#"
                        />

                        {fixSwitch ? (
                            <div className="fix-box">
                                <input
                                    value={nickNameInput}
                                    className="nick-name-input"
                                    onChange={onChange}
                                    type="text"
                                    placeholder={nickName}
                                    name="nickName"
                                />
                                <button
                                    onClick={() => {
                                        setImgSwitch(!imgSwitch);
                                    }}
                                    className="myprofile-image-fix"
                                >
                                    이미지 변경
                                </button>
                            </div>
                        ) : (
                            <span className="nick-name">{nickName}</span>
                        )}
                        {imgSwitch ? (
                            <ProfileImgList nickName={nickName} id={id} />
                        ) : null}
                    </div>
                    {fixSwitch ? (
                        <div>
                            <button
                                onClick={() => {
                                    if (nickName === nickNameInput) {
                                        setFixSwitch(!fixSwitch);
                                    } else {
                                        setFixSwitch(!fixSwitch);
                                        updateNickname(
                                            id,
                                            nickNameInput,
                                            nickName
                                        );
                                    }
                                }}
                                className="myprofile-fix-btn"
                            >
                                저장
                            </button>
                            <button onClick={() => setFixSwitch(!fixSwitch)}>
                                취소
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                setFixSwitch(!fixSwitch);
                            }}
                            className="myprofile-fix-btn"
                        >
                            수정
                        </button>
                    )}
                </div>
                <section className="my-post-tag">
                    <span className="my-post-logo">내 게시글</span>
                    <div className="gap"></div>
                </section>
                <section className="my-post-list">
                    <Mypost post={post} />
                </section>
            </section>
        </div>
    );
};
export default MyProfile;
