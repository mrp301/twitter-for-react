import React, { useReducer, useContext, createContext } from "react";
import { reducer, initialState } from "../reducer";
import { StoreProvider } from "../types";
import { Route, Redirect } from "react-router-dom";

const AuthContext = createContext({} as StoreProvider);
const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
  );
};

const AuthContainer: React.FC = ({ children }) => {
  const { state } = useContext(AuthContext);
  const isLogin = state.auth.uid !== "";

  return <Route>{isLogin ? <>{children}</> : <Redirect to="/login" />}</Route>;
};

export { AuthContext, AuthProvider, AuthContainer };
