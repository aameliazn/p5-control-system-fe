import React from "react";
import Layout from "@/components/layouts";
import Dashboard from "@/components/dashboard";
import ContextDashboardProvider from "@/context/DashboardContext";

export default function page() {
  return (
    <>
      <Layout>
        <ContextDashboardProvider>
          <Dashboard />
        </ContextDashboardProvider>
      </Layout>
    </>
  );
}
