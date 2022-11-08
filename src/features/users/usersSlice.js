import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: [{name: 'default'}],
    reducers: {
        add: (state,action) => {
            return [...state, action.payload]
        }
    }
});

export const {add}=usersSlice.actions;

export default usersSlice.reducer;