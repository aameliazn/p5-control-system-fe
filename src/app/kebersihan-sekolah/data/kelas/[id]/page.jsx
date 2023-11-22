import React from "react";
import Layout from "@/components/layouts";
import DataKelas from "@/components/kebersihan-sekolah/data/kelas";
import KebersihanSekolahProvider from "@/context/KebersihanSekolahContext";

export default function page() {
  return (
    <>
      <Layout>
        <KebersihanSekolahProvider>
          <DataKelas />
        </KebersihanSekolahProvider>
      </Layout>
    </>
  );
}
