"use client";
import React from "react";
import PortoUser from "./user/porto";
import ChartAdmin from "./admin/chart";
import SiswaAdmin from "./admin/siswa";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import DataSiswa from "./super-admin/dataSiswa";
import InputQuest from "./super-admin/inputQuest";
import TableQuest from "./super-admin/tableQuest";
import { usePortofolio } from "@/context/PortofolioContext";

export default function index() {
  const { visible } = usePortofolio();

  const dataUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Portofolio", url: "/portofolio" },
        ]}
      />
      
      {visible && <InputQuest />}

      {dataUser?.role == "superadmin" && (
        <div>
          <TableQuest />
          <DataSiswa />
        </div>
      )}

      {dataUser?.role == "admin" && (
        <div>
          <div className="mt-1">
            <ChartAdmin />
          </div>
          <div className="mt-4">
            <SiswaAdmin />
          </div>
        </div>
      )}

      {dataUser?.role == "user" && <PortoUser />}
    </>
  );
}
