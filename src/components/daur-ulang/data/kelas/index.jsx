import React from "react";
import FetchKelas from "./fetchKelas";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Daur Ulang", url: "/daur-ulang" },
          { label: "Data Kelas", url: "/daur-ulang/data/kelas/{id}" },
        ]}
      />
      <FetchKelas />
    </>
  );
}
