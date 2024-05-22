import { createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
    name: 'favorite',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.findIndex((arrow) => arrow.id === action.payload.id), 1);

        }
    }
});

export default favSlice.reducer;
export const addFavourite = favSlice.actions.addFavorite;
export const removeFavorite = favSlice.actions.removeFavorite;