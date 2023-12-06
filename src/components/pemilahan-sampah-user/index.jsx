import React from "react";
import Table from "./table";
import KegiatanTable from "./kegiatanTable";

export default function index() {
  return (
    <>
      <div>
        <KegiatanTable />
      </div>
      <div className="mt-2">
        <Table />
      </div>
    </>
  );
}
