import { createSlice } from '@reduxjs/toolkit';
import { callCardData } from '../../../data/callCardData/callCardData';

const initialState = {
    callCardData, 
    selectedCard: null, 
};

const callCardSlice = createSlice({
    name: 'callCards',
    initialState,
    reducers: {
        setSelectedCard: (state, action) => {
            state.selectedCard = action.payload;
        },
    },
});

export const { setSelectedCard } = callCardSlice.actions;

export const selectCallCards = (state) => state.callCards.callCardData;
export const selectSelectedCard = (state) => state.callCards.selectedCard;

export default callCardSlice.reducer;
