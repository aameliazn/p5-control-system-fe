import React from "react";

export default function inputClass() {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div>
          <p className="text-xl inline mr-3">
            <b>Input Siswa</b>
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 inline">
            XLSX (Max 200mb)
          </p>
        </div>
        <input
          class="max-w-sm w-full lg:max-w-full input-file mt-3"
          type="file"
        />
        <div className="flex justify-end mt-2">
          <button className="btn btn-primary w-1/6">Submit</button>
        </div>
      </div>
    </>
  );
}
