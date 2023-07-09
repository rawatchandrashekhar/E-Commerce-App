import { configureStore } from '@reduxjs/toolkit'
import AllProductsReducer from './slices/AllProductsSlice'
import AddToCartReducer from './slices/AddToCartSlice'
import AddToFavouriteReducer from './slices/AddToFavouriteSlice'
import AddUserDetailData from './slices/AddUserDetailData'
import TestingSliceOne from './slices/testingSlices/TestingSliceOne'

export const store = configureStore({
    reducer: {
        products: AllProductsReducer,
        cart: AddToCartReducer,
        favourite: AddToFavouriteReducer,
        user: AddUserDetailData,
        testingOne: TestingSliceOne
    },
})