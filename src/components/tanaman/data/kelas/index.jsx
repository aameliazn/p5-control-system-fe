import React from "react";
import FetchSiswa from "./fetchSiswa";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Tanaman", url: "/tanaman" },
          { label: "Data Kelas", url: "/tanaman/data/kelas/{id}" },
        ]}
      />
      <FetchSiswa />
    </>
  );
}
