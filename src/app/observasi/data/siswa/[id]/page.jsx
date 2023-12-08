import React from "react";
import DataSiswa from "@/components/observasi/super-admin/data/siswa";
import Layout from "@/components/layouts";
import ObservasiProvider from "@/context/ObservasiContext";

export default function page() {
  return (
    <>
      <Layout>
        <ObservasiProvider>
          <DataSiswa />
        </ObservasiProvider>
      </Layout>
    </>
  );
}
