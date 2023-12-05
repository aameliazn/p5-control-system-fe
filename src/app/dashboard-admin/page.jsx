import React from "react";
import Layout from "@/components/layouts";
import MateriAdmin from "@/components/materi-admin";
import KebersihanSekolahAdmin from "@/components/kebersihan-sekolah-admin";
import MateriProvider from "@/context/MateriContext";
import DashboardAdmin from "@/components/dashboard-admin";
import MilahSampahAdmin from "@/components/milah-sampah-admin";
import PortofolioAdmin from "@/components/portofolio-admin";
import ObservasiAdmin from "@/components/observasi-admin";
export default function page() {
  return (
    <>
      <Layout>
      <div className="mt-4">
        ini dashboard admin
          <DashboardAdmin />
        </div>
        <div className="mt-2">
          ini materi admin
          <MateriProvider>
            <MateriAdmin />
          </MateriProvider>
        </div>
        <div className="mt-4">
          ini kebersihan admin
          <KebersihanSekolahAdmin />
        </div>
        
        <div className="mt-4">
          ini milah sampah admin
          <MilahSampahAdmin />
        </div>
        <div className="mt-4">
          ini portofolio admin
          <PortofolioAdmin />
        </div>
      
        <div className="mt-4">
          ini observasi admin
          <ObservasiAdmin />
        </div>
      </Layout>
    </>
  );
}
