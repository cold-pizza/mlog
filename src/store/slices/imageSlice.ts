import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "profile-images",
    initialState: [
        "./images/user-solid.svg",
        "./images/cat-solid.svg",
        "./images/dog-solid.svg",
        "./images/dragon-solid.svg",
        "./images/github.svg",
    ],
    reducers: {},
});

export default imageSlice;
