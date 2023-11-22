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
          { label: "Kebersihan Diri", url: "/kebersihan-diri" },
          { label: "Data Kelas", url: "/kebersihan-diri/data/kelas/{id}" },
        ]}
      />
      <FetchKelas />
    </>
  );
}
