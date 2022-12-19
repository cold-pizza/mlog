import React, { SetStateAction, TextareaHTMLAttributes } from "react";

export type PostContentsType = {
    title: string;
    writer: string;
    days: string;
    contents: string;
};

export type OnChange = (
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<TextareaHTMLAttributes>,
    state: null | {},
    setState: SetStateAction
) => void;

export type PsCheckOnChangeType = (
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<TextareaHTMLAttributes>,
    state: {
        nickName: string;
        email: string;
        password: string;
        passwordCheck: string;
        tel: string;
    },
    setState: SetStateAction
) => void;

export type Login = (
    email: string,
    pw: string,
    history: History<unknown>
) => void;

export interface Signup {
    (
        nickName: string,
        email: string,
        pw: string,
        passwordCheck: string,
        tel: string,
        mbti: string,
        history: History<unknown>
    ): void;
}

export type Logout = (history: History<unknown>) => void;

export type Publishing = (
    title: string,
    contents: string,
    history: History<unknown>
) => void;

export interface PostWriteProps {
    title: string;
    contents: string;
}

export type Today = () => string;

export type PostType = {
    title: string;
    writer: string;
    days: string;
}[];

export interface MypostIprops {
    post: PostType;
}

export interface ProfileImgListIprops {
    nickName: string;
    id: number;
}

export interface DeleteBoxIprops {
    deleteSwitch: boolean;
    setDeleteSwitch: SetStateAction;
    id: number;
    title: string;
    history: History<unknown>;
}

export interface NavIprops {
    contentsLen: number;
    title: string;
    contents: string;
}

export type UpdateProfileImgType = (
    i: number,
    id: number,
    nickName: string
) => void;

export type UpdateNicknameType = (
    id: number,
    nickName: string,
    beforeNickname: string
) => void;

export type DeletePostType = (
    id: number,
    title: string,
    history: History<unknown>
) => void;

export type ReadPostInfoType = (
    nickName: string,
    days: string,
    setPost: SetStateAction
) => void;
