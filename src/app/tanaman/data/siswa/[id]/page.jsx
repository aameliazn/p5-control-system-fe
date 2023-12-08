import React from "react";
import Layout from "@/components/layouts";
import DataSiswa from "@/components/tanaman/super-admin/data/siswa";
import TanamanProvider from "@/context/TanamanContext";

export default function page() {
  return (
    <>
      <Layout>
        <TanamanProvider>
          <DataSiswa />
        </TanamanProvider>
      </Layout>
    </>
  );
}
