import React from "react";
import Layout from "@/components/layouts";
import DaurUlang from "@/components/daur-ulang/super-admin/data/siswa";
import DaurUlangProvider from "@/context/DaurUlangContext";

export default function page() {
  return (
    <>
      <Layout>
        <DaurUlangProvider>
          <DaurUlang />
        </DaurUlangProvider>
      </Layout>
    </>
  );
}
