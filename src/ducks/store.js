import { configureStore } from "@reduxjs/toolkit";
import favColorSliceReducer from './slices/favColorSlice'

const store  = configureStore({
    reducer: {
        favColor: favColorSliceReducer
    }
})

export default store