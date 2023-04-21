import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allData: [],
}

export const AllProductsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productData: (state, action) => {
            state.allData = action.payload
            console.log("ALL DATA IN REDUX", state.allData);
        },
    },
})

export const { productData } = AllProductsSlice.actions

export default AllProductsSlice.reducer