'use client'

import React, {useState} from 'react'
import axios from 'axios'

export default function inputMateri() {
  const [selectedFile, setSelectedFile] = useState(null);
  


  //handle post pdf
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleFilePDF = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);


    //post data pdf
    axios.post(' http://localhost:2000/materi', formData)
    .then((response) => {
      console.log('File sudah ter aploud', response.data);
    })
    .catch((err) => {
      console.error('error aploud file', err);
    });
  };
  return (
   <>
     <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div>
          <p className="text-xl inline mr-3">
            <b>Input Materi</b>
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 inline">
            XLSX (Max 200mb)
          </p>
        </div>
        <input
          class="max-w-sm w-full lg:max-w-full input-file mt-3"
          type="file"
          accept='.pdf'
          onChange={handleFileChange}
        />
        <div className="flex justify-end mt-2">
          <button onClick={handleFilePDF} className="btn btn-primary w-1/6">Upload PDF</button>
        </div>
      </div>
   </>
  )
}
