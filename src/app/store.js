import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "../features/users/usersSlice"
import messagesReducer from '../features/messages/messagesSlice'

export default configureStore({
  reducer: { users: usersReducer, messages: messagesReducer},
})