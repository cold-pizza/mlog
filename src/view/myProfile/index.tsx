/*
코드설명: 내 정보를 수정할 수 있는 컴포넌트.
수정날짜: 2022-12-26
*/

import "./style.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Nav from "../nav";
import Mypost from "../myPost";
import { State } from "../../types";
import ProfileImgList from "./ProfileImgLIst";
import updateNickname from "../../controller/update/updateNickname";

const MyProfile = function () {
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.user) {
            alert("로그인 해주세요.");
            history.replace("/");
        }
    }, []);
    const profileImg = JSON.parse(localStorage.user).profileImg;
    const nickName = JSON.parse(localStorage.user).nickName;
    const id = JSON.parse(localStorage.user).id;
    const [fixSwitch, setFixSwitch] = useState(false);
    const [imgSwitch, setImgSwitch] = useState(false);
    const [nickNameInput, setNickNameInput] = useState("");
    const profileImgList = useSelector(
        (state: { imageSlice: string[] }) => state.imageSlice
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickNameInput(e.target.value);
    };

    const [post, setPost] = useState<State["PostType"]>([
        {
            postId: "",
            mbti: "",
            title: "",
            writer: "",
            days: "",
            viewCount: 0,
        },
    ]);

    useEffect(() => {
        if (nickNameInput === "") {
            setNickNameInput(nickName);
        }
        axios
            .post("/api/mypost/read", { id })
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

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
                                    className="myprofile-image-fix-btn"
                                >
                                    이미지 변경
                                </button>
                            </div>
                        ) : (
                            <span className="nick-name">{nickName}</span>
                        )}
                        {/* 이미지 선택란 */}
                        {imgSwitch ? (
                            <ProfileImgList nickName={nickName} id={id} />
                        ) : null}
                    </div>
                    {fixSwitch ? (
                        <div className="myprofile-fix-box">
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
                            <button
                                className="myprofile-fix-btn"
                                onClick={() => {
                                    if (imgSwitch) {
                                        setImgSwitch(!imgSwitch);
                                    }
                                    setFixSwitch(!fixSwitch);
                                }}
                            >
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
