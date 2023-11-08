import React from "react";
import InputQuest from "./inputQuest";
import TableQuest from "./tableQuest";
import DataSiswa from "./dataSiswa";

export default function index() {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <InputQuest />
      </div>
      <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <TableQuest />
      </div>
      <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <DataSiswa />
      </div>
    </>
  );
}
