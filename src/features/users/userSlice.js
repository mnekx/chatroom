import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'currUser',
    initialState: {name: 'default'},
    reducers: {
        enter: (state,action) => {
            state.name=action.payload;
            return state
        }
    }
});

export const {enter}=userSlice.actions;

export default userSlice.reducer;