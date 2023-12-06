import React from "react";
import Layout from "@/components/layouts";
import DataSiswa from "@/components/kebersihan-diri/data/siswa";
import KebersihanDiriProvider from "@/context/KebersihanDiriContext";

export default function page() {
  return (
    <>
      <Layout>
        <KebersihanDiriProvider>
          <DataSiswa />
        </KebersihanDiriProvider>
      </Layout>
    </>
  );
}
