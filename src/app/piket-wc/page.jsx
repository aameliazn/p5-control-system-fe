import React from "react";
import Layout from "@/components/layouts";
import PiketWc from "@/components/piket-wc";
import PiketWcProvider from "@/context/PiketWcContext";

export default function page() {
  return (
    <>
      <Layout>
        <PiketWcProvider>
          <PiketWc />
        </PiketWcProvider>
      </Layout>
    </>
  );
}
