import { createSlice } from '@reduxjs/toolkit';
import { callCardData } from '../../../data/callCardData/callCardData';

const initialState = {
    callCardData
};

const callCardSlice = createSlice({
    name: 'callCards',
    initialState,
    reducers: {},
});

export const selectCallCards = (state) => state.callCards.callCardData;
export default callCardSlice.reducer;
