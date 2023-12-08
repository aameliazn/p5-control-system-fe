import React from "react";
import Layout from "@/components/layouts";
import TanamanProvider from "@/context/TanamanContext";
import DataKelasTanaman from "@/components/tanaman/super-admin/data/kelas";

export default function page() {
  return (
    <>
      <Layout>
        <TanamanProvider>
          <DataKelasTanaman />
        </TanamanProvider>
      </Layout>
    </>
  );
}
