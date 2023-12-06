import React from "react";
import Layout from "@/components/layouts";
import Observasi from "@/components/observasi";
import ObservasiProvider from "@/context/ObservasiContext";

export default function page() {
  return (
    <>
      <Layout>
        <ObservasiProvider>
          <Observasi />
        </ObservasiProvider>
      </Layout>
    </>
  );
}
