"use client";
import React, { createContext, useContext } from "react";

const ContextKebersihanDiri = createContext(null);

export default function KebersihanDiriContext({ children }) {
  //

  const state = {
    //
  };

  return (
    <ContextKebersihanDiri.Provider value={state}>
      {children}
    </ContextKebersihanDiri.Provider>
  );
}

export const useKebersihanDiri = () => {
  const context = useContext(ContextKebersihanDiri);
  if (context === undefined) {
    throw new Error(
      `useKebersihanDiri must be use within a Network Performance`
    );
  }
  return context;
};
