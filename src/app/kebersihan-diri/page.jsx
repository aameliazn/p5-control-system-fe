import React from "react";
import Layout from "@/components/layouts";
import KebersihanDiri from "@/components/kebersihan-diri";
import KebersihanDiriProvider from "@/context/KebersihanDiriContext";

export default function page() {
  return (
    <>
      <Layout>
        <KebersihanDiriProvider>
          <KebersihanDiri />
        </KebersihanDiriProvider>
      </Layout>
    </>
  );
}
