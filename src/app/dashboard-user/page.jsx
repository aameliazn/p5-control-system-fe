import React from "react";
import Layout from "@/components/layouts";
import ContextMateriProvider from "@/context/MateriContext";
import DashboardUser from "@/components/dashboard-user";
import KebersihanSekolahUser from "@/components/kebersihan-sekolah-user";
import KebersihanPiket from "@/components/kebersihan-piket";
import BudidayaTanamanUser from "@/components/budidaya-tanaman-user"
import PemilahanSampahUser from "@/components/pemilahan-sampah-user"
import ObservasiUser from "@/components/observasi-user"
import PortofolioUser from "@/components/portofolio-user"
export default function page() {
  return (
    <>
      <Layout>
        <div>
          <ContextMateriProvider>
          <DashboardUser />
          </ContextMateriProvider>
          
        </div>
        {/* Ini Kebersihan Sekolah user Page */}
        <div className="mt-2">
          <KebersihanSekolahUser />
        </div>
        {/* Ini Kebersihan Piket user Page */}
        <div className="mt-2">
          <KebersihanPiket />
        </div>
        {/* Ini Budidaya Tanaman user Page */}
        <div className="mt-2">
          <BudidayaTanamanUser />
        </div>
        {/* ini Pemilahan sampah user page */}
        <div className="mt-2">
          <PemilahanSampahUser />
        </div>
        {/* ini Pemilahan Observasi user page */}
        <div className="mt-2">
          <ObservasiUser />
        </div>
        {/* ini Portofolio user page */}
        <div className="mt-2">
          <PortofolioUser />
        </div>
      </Layout>
    </>
  );
}
