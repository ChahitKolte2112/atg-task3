import { configureStore } from "@reduxjs/toolkit";
import persondetailsSlice from "./persondetailsSlice";
export const store = configureStore({
    reducer: {
        details: persondetailsSlice,
    },
});
export default store;
