import React from "react";
import Layout from "@/components/layouts";
import DataKelasDashboard from "@/components/dashboard/data/kelas";
import ContextDashboardProvider from "@/context/DashboardContext";

export default function page({ params }) {
  return (
    <>
      <Layout>
        <ContextDashboardProvider>
          <DataKelasDashboard props={params} />
        </ContextDashboardProvider>
      </Layout>
    </>
  );
}
