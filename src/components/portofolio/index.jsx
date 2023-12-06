"use client";
import React from "react";
import DataSiswa from "./dataSiswa";
import InputQuest from "./inputQuest";
import TableQuest from "./tableQuest";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { usePortofolio } from "@/context/PortofolioContext";

export default function index() {
  const { visible } = usePortofolio();
  
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Portofolio", url: "/portofolio" },
        ]}
      />
      {visible && <InputQuest />}
      <TableQuest />
      <DataSiswa />
    </>
  );
}
