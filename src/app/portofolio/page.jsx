import React from "react";
import Layout from "@/components/layouts";
import Portofolio from "@/components/portofolio";
import PortofolioProvider from "@/context/PortofolioContext";

export default function page() {
  return (
    <>
      <Layout>
        <PortofolioProvider>
          <Portofolio />
        </PortofolioProvider>
      </Layout>
    </>
  );
}
