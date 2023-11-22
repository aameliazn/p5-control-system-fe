import React from "react";
import Layout from "@/components/layouts";
import KebersihanDiriProvider from "@/context/KebersihanDiriContext";
import DataKelasKebersihan from "@/components/kebersihan-diri/data/kelas";

export default function page() {
  return (
    <>
      <Layout>
        <KebersihanDiriProvider>
          <DataKelasKebersihan />
        </KebersihanDiriProvider>
      </Layout>
    </>
  );
}
