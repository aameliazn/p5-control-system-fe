import React from "react";
import Layout from "@/components/layouts";
import KebersihanSekolah from "@/components/kebersihan-sekolah";
import KebersihanSekolahProvider from "@/context/KebersihanSekolahContext";

export default function page() {
  return (
    <>
      <Layout>
        <KebersihanSekolahProvider>
          <KebersihanSekolah />
        </KebersihanSekolahProvider>
      </Layout>
    </>
  );
}
