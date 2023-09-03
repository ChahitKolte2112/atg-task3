import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loader: true,
};
const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        setLoader(state, action) {
            state.loader = action.payload;
        },
    },
});
export const loaderAction = loaderSlice.actions;
export default loaderSlice.reducer;
