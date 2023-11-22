import React from "react";
import Layout from "@/components/layouts";
import DashboardAdmin from "@/components/dashboard-admin";
import KebersihanSekolahAdmin from "@/components/kebersihan-sekolah-admin";
import MateriProvider from "@/context/MateriContext";
import TanamanAdmin from "@/components/tanaman-admin";
export default function page() {
  return (
    <>
      <Layout>
        <div className="mt-2">
          <MateriProvider>
            <DashboardAdmin />
          </MateriProvider>
        </div>
        <div className="mt-4">
          <KebersihanSekolahAdmin />
        </div>
        <div className="mt-4">
          <TanamanAdmin />
        </div>
      </Layout>
    </>
  );
}
