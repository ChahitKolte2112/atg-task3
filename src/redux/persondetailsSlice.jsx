import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: null,
};
const personaldetailsSlice = createSlice({
    name: "personaldata",
    initialState,
    reducers: {
        adddata(state, action) {
            state.data = { ...action.payload };
        },
    },
});
export const dataActions = personaldetailsSlice.actions;
export default personaldetailsSlice.reducer;
