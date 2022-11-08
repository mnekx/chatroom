import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import messagesReducer from '../features/messages/messagesSlice';

export default configureStore({
  reducer: { currUser: userReducer, messages: messagesReducer },
});
