"use client";
import React, { createContext, useContext } from "react";
import { useLogin } from "./LoginContext";

const ContextLanding = createContext(null);

export default function LandingContext({ children }) {
  // data user from login
  const { dataUser } = useLogin();

  // data useState yang akan dipakai

  // const api, useEffect api

  const state = {
    // useState yang diatas
  };

  return (
    <ContextLanding.Provider value={state}>{children}</ContextLanding.Provider>
  );
}

export const useLanding = () => {
  const context = useContext(ContextLanding);
  if (context === undefined) {
    throw new Error(`useLanding must be use within a Network Performance`);
  }
  return context;
};
