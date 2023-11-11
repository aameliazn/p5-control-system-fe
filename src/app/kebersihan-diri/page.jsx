import React from "react";
import Layout from "@/components/layouts";
import Index from "@/components/kebersihan-diri/index";
import KebersihanDiriProvider from "@/context/KebersihanDiriContext";
export default function page() {
  return (
    <>
      <Layout>
        <KebersihanDiriProvider>
            <Index/>     
        </KebersihanDiriProvider>
      </Layout>
    </>
  );
}
