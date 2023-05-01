import { configureStore } from '@reduxjs/toolkit'
import AllProductsReducer from './slices/AllProductsSlice'
import AddToCartReducer from './slices/AddToCartSlice'
import AddToFavouriteReducer from './slices/AddToFavouriteSlice'

export const store = configureStore({
    reducer: {
        products: AllProductsReducer,
        cart: AddToCartReducer,
        favourite: AddToFavouriteReducer
    },
})