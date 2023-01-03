import React, { SetStateAction, TextareaHTMLAttributes } from "react";

// users type
export interface Users {
    LoginType: (email: string, pw: string, history: History<unknown>) => void;
    SignupType: (
        nickName: string,
        email: string,
        pw: string,
        passwordCheck: string,
        tel: string,
        mbti: string,
        history: History<unknown>
    ) => void;
    LogoutType: (history: History<unknown>) => void;
}

// onChange type
export interface OnChange {
    OnChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<TextareaHTMLAttributes>,
        state: null | {},
        setState: SetStateAction
    ) => void;
    PsCheckOnChangeType: (
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
}

// state type
export interface State {
    PostContentsType: {
        title: string;
        writer: string;
        days: string;
        contents: string;
        viewCount: number;
    };
    PostType: {
        title: string;
        writer: string;
        days: string;
        viewCount: number;
    }[];
}

// props type
export interface Iprops {
    PostWriteProps: { title: string; contents: string };
    MypostProps: { post: State["PostType"] };
    DeleteBoxProps: {
        deleteSwitch: boolean;
        setDeleteSwitch: SetStateAction;
        id: number;
        title: string;
        history: History<unknown>;
    };
    ProfileImgListProps: { nickName: string; id: number };
}

// days type
export interface Time {
    GetTimeForTodayType: (value: number[]) => string;
    GetTodayType: (days: string) => number[];
    Today: () => string;
}

// controller type
export interface Function {
    PublishingType: (
        title: string,
        contents: string,
        history: History<unknown>
    ) => void;
    UpdateProfileImgType: (i: number, id: number, nickName: string) => void;
    UpdateNicknameType: (
        id: number,
        nickName: string,
        beforeNickname: string
    ) => void;
    DeletePostType: (
        id: number,
        title: string,
        history: History<unknown>
    ) => void;
    ReadPostInfoType: (
        nickName: string,
        days: string,
        setPost: SetStateAction
    ) => void;
    CreateMbtiPostType: (mbti: string) => void;
    FilterMbtiType: (mbti: string) => boolean;
    UpdateViewCountType: (
        days: string,
        writer: string,
        viewCount: number
    ) => void;
}
