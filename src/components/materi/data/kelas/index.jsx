import React from "react";
import FetchData from "./fetchData";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Materi", url: "/materi" },
          { label: "Data Kelas", url: "/materi/data/kelas/{id}" },
        ]}
      />
      <FetchData />
    </div>
  );
}
