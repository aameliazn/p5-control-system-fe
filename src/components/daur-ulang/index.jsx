"use client";
import React from "react";
import DataSiswa from "./dataSiswa";
import InputRuangan from "./inputRuangan";
import TableRuangan from "./tableRuangan";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { useDaurUlang } from "@/context/DaurUlangContext";

export default function index() {
  const { visible } = useDaurUlang();

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Daur Ulang", url: "/daur-ulang" },
        ]}
      />
      {visible && <InputRuangan />}
      <TableRuangan />
      <DataSiswa />
    </>
  );
}
