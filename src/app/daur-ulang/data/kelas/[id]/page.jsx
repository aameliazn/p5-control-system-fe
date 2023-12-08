import React from "react";
import Layout from "@/components/layouts";
import DataKelas from "@/components/daur-ulang/super-admin/data/kelas";
import DaurUlangProvider from "@/context/DaurUlangContext";

export default function page() {
  return (
    <>
      <Layout>
        <DaurUlangProvider>
          <DataKelas />
        </DaurUlangProvider>
      </Layout>
    </>
  );
}
