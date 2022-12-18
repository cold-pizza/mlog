import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "create-post",
    initialState: { title: "", contents: "" },
    reducers: {
        createPost: (state, action) => {
            console.log(action.payload);
            state.title = action.payload.title;
            state.contents = action.payload.contents;
        },
    },
});

export default postSlice;
