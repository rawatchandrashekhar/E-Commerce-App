import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    uniqueSelectedOptions: [],
}

export const TestingSliceOne = createSlice({
    name: 'addSelectedOptionData',
    initialState,
    reducers: {
        addSelectedOptions: (state, action) => {
            let tempIndex = state.uniqueSelectedOptions.findIndex(item => item.questionId === action.payload.questionId)
            if (tempIndex === -1) {
                state.uniqueSelectedOptions.push(action.payload);
            } else {
                state.uniqueSelectedOptions[tempIndex].optItem = action.payload.optItem
            }
            console.log("ADD UNIQUE SELECTED OPTIONS", state.uniqueSelectedOptions);
        }
    },
})

export const { addSelectedOptions } = TestingSliceOne.actions

export default TestingSliceOne.reducer