"use client";

import React, { useState } from "react";
import axios from "axios";

export default function inputRuangan() {
  const [ruangan, setRuangan] = useState("");

  const handleRuangan = async () => {
    try {
      const response = await axios.post("http://localhost:2000/ruangan", {
        ruangan,
      });
      console.log("ruangan berhasil ditambahkan", response.data);
      window.location.reload();
    } catch (error) {
      console.error("gagal menambah data", error);
    }
  };
  return (
    <>
          <div>
        <p className="text-md inline mr-3">
          <b>Input Ruangan</b>
        </p>
      </div>
      <input
            class="appearance-none mt-2 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            value={ruangan}
            onChange={(e) => setRuangan(e.target.value)}
            type="text"
          />
      <div className="flex justify-end mt-1">
        <button o className="btn btn-primary w-1/6" onClick={handleRuangan}>
          Submit
        </button>
      </div>
    </>
    )
}
