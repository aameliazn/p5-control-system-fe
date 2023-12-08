"use client";
import React from "react";
import AdminChart from "./admin/chart";
import AdminTable from "./admin/table";
import TableUser from "./user/table";
import KegiatanTable from "./user/kegiatanTable";
import DataSiswa from "./super-admin/dataSiswa";
import InputRuangan from "./super-admin/inputRuangan";
import TableRuangan from "./super-admin/tableRuangan";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { useDaurUlang } from "@/context/DaurUlangContext";

export default function index() {
  const { visible } = useDaurUlang();

  const dataUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Daur Ulang", url: "/daur-ulang" },
        ]}
      />

      {visible && <InputRuangan />}

      {dataUser?.role == "superadmin" && (
        <div>
          <TableRuangan />
          <DataSiswa />
        </div>
      )}

      {dataUser?.role == "admin" && (
        <div>
          <div className="mt-1">
            <AdminChart />
          </div>
          <div className="mt-1">
            <AdminTable />
          </div>
        </div>
      )}

      {dataUser?.role == "user" && (
        <div>
          <div>
            <KegiatanTable />
          </div>
          <div className="mt-2">
            <TableUser />
          </div>
        </div>
      )}
    </>
  );
}
