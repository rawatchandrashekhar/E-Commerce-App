import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addUserDetailData: {},
}

export const AddUserDetailData = createSlice({
    name: 'addtouser',
    initialState,
    reducers: {
        addUserData: (state, action) => {
            state.addUserDetailData = action.payload
            console.log("ADD TO USER DATA IN REDUX", state.addToCartData);
        },
    },
})

export const { addUserData } = AddUserDetailData.actions

export default AddUserDetailData.reducer