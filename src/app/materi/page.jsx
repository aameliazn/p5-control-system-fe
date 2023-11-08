import React from "react";
import Layout from "@/components/layouts";
import Materi from "@/components/materi";
import ContextMateriProvider from "@/context/MateriContext";

export default function page() {
  return (
    <>
      <Layout>
        <ContextMateriProvider>
          <Materi />
        </ContextMateriProvider>
      </Layout>
    </>
  );
}
