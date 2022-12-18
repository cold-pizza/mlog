import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";

const store = configureStore({
    reducer: {
        createPost: postSlice.reducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
