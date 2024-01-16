"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton, Button } from 'antd';

export default function questioner() {
  const [quest, useQuest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(" http://localhost:2000/pertanyaan").then((response) => {
      useQuest(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
    
      <div className="relative flex flex-col jus items-center overflow-hidden p-2 sm:py-10  ">
      {loading ? (
        <Skeleton active />
      ) : (
        <div className="bg-white  shadow-xl shadow-gray-100 w-full flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4   border-b-2 border-[var(--main-color)] rounded-lg">
          <div className="flex gap-4 text-md mb-4 font-bold">
            Observasi Energi dan Air{" "}
          </div>
          {quest.map((item, index) => (
            <div key={index} className="mt-5">
              <label
                htmlFor={`jawaban_${index}`}
                class="block mb-2 text-md font-sm text-black dark:text-black"
              >
                {" "}
                {index + 1}. {item.pertanyaan}
              </label>
              <textarea
                id={`jawaban_${index}`}
                rows="2"
                class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-[#73d802] dark:bg-white dark:border-[#73d802] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jawaban anda.."
              ></textarea>
            </div>
            
          ))}
            <div className="p-2 flex gap-2">
          <div>
            <Button>Export</Button>
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </div>
        </div>
        )}
      </div>
       
    </>
  );
}
