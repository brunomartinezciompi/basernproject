import React, { createContext, useReducer, useState } from "react";

const initialState = { authenticated: false };
const AuthenticationContext = createContext(initialState);

const AuthenticationProvider = ({ children, navigation }) => {
  const [authenticationState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "sign in":
        return { authenticated: true };
      default:
        return { authenticated: false };
    }
  }, initialState);

  return (
    <AuthenticationContext.Provider
      value={{
        authenticationState,
        dispatch,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
