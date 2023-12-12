import {createSlice} from '@reduxjs/toolkit'

// const flavorArr = ['Rocky Road', 'Mint Chocolate Chip', 'Cookie Dough', "Peanut Butter Clusters"]

export const favFlavorSlice = createSlice({
    name: "favoriteFlavor",
    initialState: {
        value: ''
    },
    reducers: {
        setFlavor: (state, action) => {
            state.value = action.payload
        },
        clearFlavor: (state, action) => {
            state.value = ''
        }
    }
})

export const {setFlavor, clearFlavor} = favFlavorSlice.actions

export const selectFavFlavor = state => state.favFlavor.value

export default favFlavorSlice.reducer