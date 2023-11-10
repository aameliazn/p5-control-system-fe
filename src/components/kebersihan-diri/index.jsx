"use client";
import React from "react";
import DataSiswa from "./dataSiswa";
import InputClass from "./inputClass";
import KegiatanTable from "./kegiatanTable";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { useKebersihanDiri } from "@/context/KebersihanDiriContext";

export default function index() {
  const { visible } = useKebersihanDiri();

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Kebersihan Diri", url: "/kebersihan-diri" },
        ]}
      />
      {visible && <InputClass />}
      <KegiatanTable />
      <DataSiswa />
    </>
  );
}
