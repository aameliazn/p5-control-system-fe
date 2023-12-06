import React from "react";
import Layout from "@/components/layouts";
import DataSiswa from "@/components/kebersihan-sekolah/data/siswa";
import KebersihanSekolahProvider from "@/context/KebersihanSekolahContext";

export default function page() {
  return (
    <>
      <Layout>
        <KebersihanSekolahProvider>
          <DataSiswa />
        </KebersihanSekolahProvider>
      </Layout>
    </>
  );
}
