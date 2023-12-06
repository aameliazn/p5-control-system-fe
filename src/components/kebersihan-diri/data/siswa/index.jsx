import React from "react";
import FetchSiswa from "./fetchSiswa";
import Style from "./style.module.css";
import { HomeFilled } from "@ant-design/icons";
import Breadcrumb from "@/components/layouts/breadcrumb";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Kebersihan Diri", url: "/kebersihan-diri" },
          { label: "Data Kelas", url: "/kebersihan-diri/data/kelas/[id]?" },
          { label: "Data Siswa", url: "/kebersihan-diri/data/siswa/[id]?" },
        ]}
      />
      <FetchSiswa />
    </>
  );
}
