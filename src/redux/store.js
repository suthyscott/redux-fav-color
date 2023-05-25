import { configureStore } from "@reduxjs/toolkit"
import favColorSliceReducer from "./slices/favColorSlice"
import favMealSliceReducer from "./slices/favMealSlice"

const store = configureStore({
    reducer: { 
        favColor: favColorSliceReducer, 
        favMeal: favMealSliceReducer 
    }
})

export default store
