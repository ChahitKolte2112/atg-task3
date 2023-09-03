import { configureStore } from "@reduxjs/toolkit";
import persondetailsSlice from "./persondetailsSlice";
import loaderSlice from "./loaderSlice";
export const store = configureStore({
    reducer: {
        details: persondetailsSlice,
        loader: loaderSlice,
    },
});
export default store;
