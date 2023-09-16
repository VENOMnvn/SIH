import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import langReducer from "./slices/langSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        lang: langReducer,
    },
});

export default appStore;