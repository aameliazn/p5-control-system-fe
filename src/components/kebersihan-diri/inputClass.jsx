"use client";

import React, { useState } from "react";
import axios from "axios";
import {notification} from 'antd';
import { useKebersihanDiri } from "@/context/KebersihanDiriContext";

export default function inputClass() {
  
  const {kegiatan, setKegiatan, handleKegiatan} = useKebersihanDiri();
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div>
          <p className="text-md inline mr-3">
            <b>Input Kegiatan</b>
          </p>

        </div>
        <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            value={kegiatan}
            onChange={(e) => setKegiatan(e.target.value)}
            type="text"
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
