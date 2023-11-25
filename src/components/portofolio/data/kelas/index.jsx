import React from "react";
import FetchKelas from "./FetchKelas";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Portofolio", url: "/portofolio" },
          { label: "Data Kelas", url: "/portofolio/data/kelas/[id]?" },
        ]}
      />
      <FetchKelas />
    </>
  );
}
