"use client";

import React, { useState } from "react";
import axios from "axios";

export default function inputClass() {
  const [kegiatan, setKegiatan] = useState("");
  const handleKegiatan = async () => {
    try {
      const response = await axios.post("http://localhost:2000/kegiatan", {
        kegiatan,
      });
      console.log("kegiatan berhasil disimpan", response.data);
    } catch (error) {
      console.error("gagal menyimpan kegiatan:", error);
    }
  };

  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div>
          <p className="text-xl inline mr-3">
            <b>Input Kegiatan</b>
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 inline">
            XLSX (Max 200mb)
          </p>
        </div>
        <input
          type="text"
          class="max-w-sm w-full lg:max-w-full input-file mt-3"
          value={kegiatan}
          onChange={(e) => setKegiatan(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <button o className="btn btn-primary w-1/6" onClick={handleKegiatan}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
