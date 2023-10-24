"use client";
import React, { createContext, useContext } from "react";

const ContextDashboard = createContext(null);

export default function DashboardContext({ children }) {
  

  const state = {
    
  };

  return (
    <ContextDashboard.Provider>{children}</ContextDashboard.Provider>
  );
}

export const useDashboard = () => {
  const context = useContext(ContextDashboard);
  if (context == undefined) {
    throw new Error(`useDashboard must be use within a Network Performance`);
  }
  return context;
};
