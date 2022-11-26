import React, { SetStateAction } from "react";

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
    e: React.ChangeEvent<HTMLInputElement>,
    state: null | { email: string; password: string },
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

export type IdEncryption = (
    state: undefined[],
    setState: SetStateAction
) => void;
