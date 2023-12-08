import React from "react";
import FetchKegiatan from "./fetchKegiatan";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Kebersihan Sekolah", url: "/kebersihan-sekolah" },
          { label: "Data Kelas", url: "/kebersihan-sekolah/data/kelas/[id]?" },
          { label: "Data Siswa", url: "/kebersihan-sekolah/data/siswa/[id]?" },
        ]}
      />
      <FetchKegiatan />
    </>
  );
}
