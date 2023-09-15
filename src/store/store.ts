import { configureStore } from "@reduxjs/toolkit";
import regexReducer from './valueSlice';

export default configureStore({
    reducer: {
        regex: regexReducer
    }
})