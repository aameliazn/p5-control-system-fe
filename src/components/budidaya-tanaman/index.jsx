import React from "react";
import DataSiswa from "./dataSiswa";
import InputClass from "./inputClass";
import TableClass from "./tableClass";

export default function index() {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <InputClass />
      </div>
      <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <TableClass />
      </div>
      <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <DataSiswa />
      </div>
    </>
  );
}
