import { configureStore } from '@reduxjs/toolkit'
import AllProductsReducer from './slices/AllProductsSlice'
import AddToCartReducer from './slices/AddToCartSlice'

export const store = configureStore({
    reducer: {
        products: AllProductsReducer,
        cart: AddToCartReducer
    },
})