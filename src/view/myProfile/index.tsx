/*
코드설명: 내 정보를 수정할 수 있는 컴포넌트.
수정날짜: 2022-12-26
*/

import "./style.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav from "../nav";
import Mypost from "../myPost";
import { State } from "../../types";
import ProfileImgList from "./ProfileImgLIst";
import getMypost from "../../controller/get/getMypost";
import MyprofileFixbox from "./myprofileFixbox";
import Fixbox from "./fixbox";

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
        getMypost(nickName, setPost);
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
                            <Fixbox
                                nickNameInput={nickNameInput}
                                imgSwitch={imgSwitch}
                                setImgSwitch={setImgSwitch}
                                setNickNameInput={setNickNameInput}
                            />
                        ) : (
                            <span className="nick-name">{nickName}</span>
                        )}
                        {/* 이미지 선택란 */}
                        {imgSwitch ? (
                            <ProfileImgList nickName={nickName} id={id} />
                        ) : null}
                    </div>
                    {fixSwitch ? (
                        <MyprofileFixbox
                            nickNameInput={nickNameInput}
                            fixSwitch={fixSwitch}
                            setFixSwitch={setFixSwitch}
                            imgSwitch={imgSwitch}
                            setImgSwitch={setImgSwitch}
                        />
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
