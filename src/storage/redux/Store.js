import { configureStore } from '@reduxjs/toolkit'
import AllProductsSlice from './slices/AllProductsSlice'

export const store = configureStore({
    reducer: {
        products: AllProductsSlice
    },
})