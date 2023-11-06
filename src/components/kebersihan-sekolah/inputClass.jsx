"use client";

import React, { useState } from "react";
import axios from "axios";

export default function inputClass() {
  const [kegiatan, setKegiatan] = useState("");
  const [kondisi, setKondisi] = useState("");
  const [skor, setSkor] = useState("");

  const handleForm = async () => {
    try {
      const response = await axios.post("http://localhost:2000/kegiatan", {
        kegiatan,
        kondisi,
        skor,
      });
      console.log("Input berhasil ditambahkan", response.data);
      window.location.reload();
    } catch (error) {
      console.error("gagal menyimpan data", error);
    }
  };
  return (
    <>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2">
            Kegiatan
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            value={kegiatan}
            onChange={(e) => setKegiatan(e.target.value)}
            type="text"
          />
        </div>
        <div class="md:w-1/2 px-3">
          <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2">
            Skor
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="text"
            value={skor}
            onChange={(e) => setSkor(e.target.value)}
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2">
            Kondisi
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            type="text"
            value={kondisi}
            onChange={(e) => setKondisi(e.target.value)}
          />
        </div>
      </div>
      <div class="flex justify-end mt-2">
        <button class="btn btn-primary w-1/6" onClick={handleForm}>
          Submit
        </button>
      </div>
    </>
  );
}
