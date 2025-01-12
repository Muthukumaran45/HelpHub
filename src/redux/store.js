import { configureStore } from '@reduxjs/toolkit';
import callCardReducer from './slice/callCardSlice/callCardSlice';

export const store = configureStore({
    reducer: {
        callCards: callCardReducer,
    },
});
