import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./slices/imageSlice";

const store = configureStore({
    reducer: {
        imageSlice: imageSlice.reducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
