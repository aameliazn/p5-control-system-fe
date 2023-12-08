import React from "react";
import Layout from "@/components/layouts";
import DataKelasMateri from "@/components/materi/super-admin/data/kelas";
import ContextMateriProvider from "@/context/MateriContext";

export default function page() {
  return (
    <div>
      <Layout>
        <ContextMateriProvider>
          <DataKelasMateri />
        </ContextMateriProvider>
      </Layout>
    </div>
  );
}
