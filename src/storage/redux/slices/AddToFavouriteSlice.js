import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addToFavouriteData: [],
}

export const AddToFavouriteSlice = createSlice({
    name: 'addtofavourite',
    initialState,
    reducers: {
        addFavData: (state, action) => {
            state.addToFavouriteData.push(action.payload);
            console.log("ADD TO FAVOURITE DATA IN REDUX", state.addToFavouriteData);
        },
        removeFavData: (state, action) => {
            state.addToFavouriteData = state.addToFavouriteData.filter(item => item.id !== action.payload.id)
            console.log("REMOVE TO FAVOURITE IN REDUX", state.addToFavouriteData);
        }
    },
})

export const { addFavData, removeFavData } = AddToFavouriteSlice.actions

export default AddToFavouriteSlice.reducer