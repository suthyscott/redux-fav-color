import { createSlice } from "@reduxjs/toolkit";

export const favColorSlice = createSlice({
    name: 'favColor',
    initialState: {
        value: ''
    },
    reducers: {
        setColor: (state, action) => {
            state.value = action.payload
        },
        clearColor: (state, action) => {
            state.value = ''
        }
    }
})

console.log(favColorSlice)
// export const setColor  = favColorSlice.actions.setColor
// export const clearColor  = favColorSlice.actions.clearColor

export const {setColor, clearColor} = favColorSlice.actions

export const selectFavColor = state => state.favColor.value

export default favColorSlice.reducer