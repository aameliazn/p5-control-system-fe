import React from "react";
import FetchData from "./fetchData";
import { HomeFilled } from "@ant-design/icons";
import Breadcrumb from "@/components/layouts/breadcrumb";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Portofolio", url: "/portofolio" },
          { label: "Data Kelas", url: "/portofolio/data/kelas/[id]?" },
          { label: "Data Siswa", url: "/portofolio/data/siswa/[id]?" },
        ]}
      />
      <FetchData />
    </>
  );
}
