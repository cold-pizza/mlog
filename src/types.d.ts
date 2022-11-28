import React, { SetStateAction, TextareaHTMLAttributes } from "react";

export interface Account {
    id: string;
    email: string;
    nickName: string;
    pw: string;
    tel: string;
    profileImg: number;
    post: null | number;
}

export type OnChange = (
    e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<TextareaHTMLAttributes>,
    state: null | {},
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
        tel: string,
        history: History<unknown>
    ): void;
}

export type Logout = () => void;

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
