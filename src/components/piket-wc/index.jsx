import React from "react";
import Table from "./table";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Piket Wc", url: "/piket-wc" },
        ]}
      />
      <Table />
    </>
  );
}
