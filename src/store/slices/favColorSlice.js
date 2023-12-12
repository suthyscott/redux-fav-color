import {createSlice} from '@reduxjs/toolkit'

const startingVal = ''

export const favColorSlice = createSlice({
    name: 'favColor',
    initialState: {
        value: startingVal
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

export const {setColor, clearColor} = favColorSlice.actions

export const selectFavColor = state => state.favoriteColor.value

export default favColorSlice.reducer