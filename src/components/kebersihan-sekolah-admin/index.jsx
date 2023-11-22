import React from "react";
import Chart from "./chart";
import Header from "./header";
import DataPengerjaan from "./DataPengerjaan";

export default function index() {
  return (
    <>
      <div className="mt-1">
        <Header />
      </div>
      <div className="mt-4">
        <Chart />
      </div>
      <div className="mt-4">
        <DataPengerjaan />
      </div>
    </>
  );
}
