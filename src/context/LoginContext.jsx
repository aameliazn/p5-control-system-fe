"use client";
import React, { createContext, useContext } from "react";
import { useLocalStorage } from "react-use";

const ContextLogin = createContext(null);

export default function LoginContext({ children }) {
  // data login
  const [dataUser, setDataUser] = useLocalStorage("user");
  const [token, setTokenUser] = useLocalStorage("token");

  const state = {
    // data login
    dataUser,
    setDataUser,
    token,
    setTokenUser,
  };

  return (
    <ContextLogin.Provider value={state}>{children}</ContextLogin.Provider>
  );
}

export const useLogin = () => {
  const context = useContext(ContextLogin);
  if (context === undefined) {
    throw new Error(`useLogin must be use within a Network Performance`);
  }
  return context;
};
