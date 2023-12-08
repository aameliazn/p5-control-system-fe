import React from "react";
import DataSiswa from "@/components/materi/super-admin/data/siswa";
import MateriProvider from "@/context/MateriContext";
import Layout from "@/components/layouts";

export default function page() {
  return (
    <>
      <Layout>
        <MateriProvider>
          <DataSiswa />
        </MateriProvider>
      </Layout>
    </>
  );
}
