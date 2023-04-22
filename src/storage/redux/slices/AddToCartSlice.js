import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addToCartData: [],
}

export const AddToCartSlice = createSlice({
    name: 'addtocart',
    initialState,
    reducers: {
        addCartData: (state, action) => {
            let productIndex = state.addToCartData.findIndex(item => item.id === action.payload.id)
            if (productIndex === -1) {
                state.addToCartData.push(action.payload);
            } else {
                state.addToCartData[productIndex].qtyValue = action.payload.qtyValue
            }
            console.log("ADD TO CART DATA IN REDUX", state.addToCartData);
        },
        removeCartData: (state, action) => {
            state.addToCartData = state.addToCartData.filter(item => item.id !== action.payload.id)
            console.log("REMOVE TO CART IN REDUX", state.addToCartData);
        }
    },
})

export const { addCartData, removeCartData } = AddToCartSlice.actions

export default AddToCartSlice.reducer