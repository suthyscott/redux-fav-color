import { configureStore } from "@reduxjs/toolkit";
import favColorSliceReducer from "./slices/favColorSlice";

const store = configureStore({
    reducer: {
        favoriteColor: favColorSliceReducer
    }
})

export default store