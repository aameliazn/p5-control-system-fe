import React from "react";
import Layout from "@/components/layouts";
import DataKelas from "@/components/portofolio/super-admin/data/kelas";
import PortofolioProvider from "@/context/PortofolioContext";

export default function page() {
  return (
    <>
      <Layout>
        <PortofolioProvider>
          <DataKelas />
        </PortofolioProvider>
      </Layout>
    </>
  );
}
