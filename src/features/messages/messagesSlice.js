import { createSlice } from "@reduxjs/toolkit";

let initialState= localStorage.getItem("messages")
  ? JSON.parse(localStorage.getItem("messages"))
  : [{user: 'default', message: 'default message'}, {user: 'default', message: 'Another default message'}];

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        add: (state,action) => {
            return [...state, action.payload]
        }
    }
});

export const {add}=messagesSlice.actions;

export default messagesSlice.reducer;