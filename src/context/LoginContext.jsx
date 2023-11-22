"use client";
import { useLocalStorage } from "react-use";
import React, { createContext, useContext, useState } from "react";

const ContextLogin = createContext(null);

export default function LoginContext({ children }) {
  // data login
  const [tokenUser, setTokenUser] = useLocalStorage("token");
  const [dataUser, setDataUser] = useState("user");

  const state = {
    // data login
    dataUser,
    setDataUser,
    tokenUser,
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
