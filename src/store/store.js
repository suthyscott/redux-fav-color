import { configureStore } from "@reduxjs/toolkit";
import favColorSliceReducer from "./slices/favColorSlice";
import favFlavorSliceReducer from "./slices/favFlavorSlice";

const store = configureStore({
    reducer: {
        favoriteColor: favColorSliceReducer,
        favFlavor: favFlavorSliceReducer
    }
})

export default store