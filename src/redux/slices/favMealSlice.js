import { createSlice } from "@reduxjs/toolkit";

export const favMealSlice = createSlice({
    name: 'favMeal',
    initialState: {
        value: {
            appetizer: '',
            entree: '',
            drink: '',
            dessert: ''
        }
    },
    reducers: {
        setMeal: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setMeal} = favMealSlice.actions

export const selectFavMeal = state => state.favMeal.value

export default favMealSlice.reducer
