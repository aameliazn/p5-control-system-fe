import React from "react";
import Layout from "@/components/layouts";
import DataKelas from "@/components/observasi/super-admin/data/kelas";
import ObservasiProvider from "@/context/ObservasiContext";

export default function page() {
  return (
    <>
      <Layout>
        <ObservasiProvider>
          <DataKelas />
        </ObservasiProvider>
      </Layout>
    </>
  );
}
