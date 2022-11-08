import React from "react";
import { useDispatch, useSelector } from "react-redux";
 
const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

export function useUserState() {
    const context = React.useContext(UserStateContext);
    if (context === undefined) {
      throw new Error("UserStateContext must be used within a UserProvider");
    }
   
    return context;
  }
   
  export function useUserDispatch() {
    const context = React.useContext(UserDispatchContext);
    if (context === undefined) {
      throw new Error("useAuthDispatch must be used within a UserProvider");
    }
   
    return context;
  }

  export const UserProvider = ({ children }) => {
    const user = useSelector(state => state.currUser);
    const dispatch = useDispatch();
   
    return (
      <UserStateContext.Provider value={user}>
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserStateContext.Provider>
    );
  };
