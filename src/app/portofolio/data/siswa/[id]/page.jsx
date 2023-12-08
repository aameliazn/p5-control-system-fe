import React from "react";
import Layout from "@/components/layouts";
import DataSiswa from "@/components/portofolio/super-admin/data/siswa";
import PortofolioProvider from "@/context/PortofolioContext";

export default function page() {
  return (
    <>
      <Layout>
        <PortofolioProvider>
          <DataSiswa />
        </PortofolioProvider>
      </Layout>
    </>
  );
}
