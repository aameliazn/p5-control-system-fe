import React from "react";
import Layout from "@/components/layouts";
import Tanaman from "@/components/tanaman";
import TanamanProvider from "@/context/TanamanContext";

export default function page() {
  return (
    <>
      <Layout>
        <TanamanProvider>
          <Tanaman />
        </TanamanProvider>
      </Layout>
    </>
  );
}
