import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: [{user: 'default', message: 'default message'}, {user: 'default', message: 'Another default message'}],
    reducers: {
        add: (state,action) => {
            return [...state, action.payload]
        }
    }
});

export const {add}=messagesSlice.actions;

export default messagesSlice.reducer;