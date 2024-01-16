"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ContextDashboard = createContext(null);

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function DashboardContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [studentData, setStudentData] = useState([]);

  const deleteRombel = (rombelSelected) => {
    axios
      .delete(`/api/v1/user/students`, {
        data: {
          rombel: rombelSelected,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`/api/v1/user/students`)
      .then((res) => {
        setStudentData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [studentData]);

  const state = {
    visible,
    setVisible,
    studentData,
    setStudentData,
    deleteRombel,
  };

  return (
    <ContextDashboard.Provider value={state}>
      {children}
    </ContextDashboard.Provider>
  );
}

export const useDashboard = () => {
  const context = useContext(ContextDashboard);
  if (context === undefined) {
    throw new Error(`useDashboard must be use within a Network Performance`);
  }
  return context;
};
