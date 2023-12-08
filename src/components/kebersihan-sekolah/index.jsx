"use client";
import React from "react";
import Chart from "./admin/chart";
import Header from "./admin/header";
import TableUser from "./user/table";
import HeaderUser from "./user/header";
import { HomeFilled } from "@ant-design/icons";
import Breadcrumb from "../layouts/breadcrumb";
import DataClass from "./super-admin/dataClass";
import TableClass from "./super-admin/tableClass";
import InputClass from "./super-admin/inputClass";
import DataPengerjaan from "./admin/DataPengerjaan";
import { useKebersihanSekolah } from "@/context/KebersihanSekolahContext";

export default function index() {
  const { visible } = useKebersihanSekolah();

  const dataUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Kebersihan Sekolah", url: "/kebersihan-sekolah" },
        ]}
      />

      {visible && <InputClass />}

      {dataUser?.role == "superadmin" && (
        <div>
          <TableClass />
          <DataClass />
        </div>
      )}

      {dataUser?.role == "admin" && (
        <div>
          <div className="mt-1">
            <Header />
          </div>
          <div className="mt-4">
            <Chart />
          </div>
          <div className="mt-4">
            <DataPengerjaan />
          </div>
        </div>
      )}

      {dataUser?.role == "user" && (
        <div>
          <div className="mt-2">
            <HeaderUser />
          </div>
          <div className="mt-4">
            <TableUser />
          </div>
        </div>
      )}
    </>
  );
}
