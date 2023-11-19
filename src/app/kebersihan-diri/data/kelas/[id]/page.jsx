import React from "react";
import Layout from "@/components/layouts";
import DataKelasKebersihan from "@/components/kebersihan-diri/data/kelas";
export default function page() {
  return (
    <>
      <Layout>
        <DataKelasKebersihan />
      </Layout>
    </>
  );
}
