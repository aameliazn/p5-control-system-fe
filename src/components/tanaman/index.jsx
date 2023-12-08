"use client";
import React from "react";
import TableUser from "./user/table";
import DataSiswa from "./super-admin/dataSiswa";
import InputClass from "./super-admin/inputClass";
import TableClass from "./super-admin/tableClass";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { useTanaman } from "@/context/TanamanContext";

export default function index() {
  const { visible } = useTanaman();

  const dataUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Tanaman", url: "/tanaman" },
        ]}
      />

      {visible && <InputClass />}

      {dataUser?.role == "superadmin" && (
        <div>
          <TableClass />
          <DataSiswa />
        </div>
      )}

      {dataUser?.role == "user" && <TableUser />}
    </>
  );
}
