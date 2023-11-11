import React from "react";
import Layout from "@/components/layouts";
import Index from "@/components/kebersihan-sekolah";
import KebersihanSekolahProvider from "@/context/KebersihanSekolahContext";

export default function page() {
  return (
    <>
      <Layout>
        <KebersihanSekolahProvider>
        <Index/>
        </KebersihanSekolahProvider>
      </Layout>
    </>
  );
}
