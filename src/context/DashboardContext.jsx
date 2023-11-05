"use client";
import React, { createContext, useContext, useState } from "react";

const ContextDashboard = createContext(null);

export default function DashboardContext({ children }) {
  const [visible, setVisible] = useState(false);

  const state = {
    visible,
    setVisible,
  };

  return <ContextDashboard.Provider value={state}>{children}</ContextDashboard.Provider>;
}

export const useDashboard = () => {
  const context = useContext(ContextDashboard);
  if (context === undefined) {
    throw new Error(`useDashboard must be use within a Network Performance`);
  }
  return context;
};
