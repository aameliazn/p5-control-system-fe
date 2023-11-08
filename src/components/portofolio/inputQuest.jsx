'use client'

import React, { useState } from 'react'
import axios from 'axios'

export default function inputQuest() {
const [pertanyaan, setPertanyaan] = useState('');

//post 
const handlePertanyaan = async () => {
    try{
        const response = await axios.post('http://localhost:2000/pertanyaan', {
            pertanyaan,
        });
        console.log('pertanyaan berhasil ditambahkan', response.data);
        window.location.reload();
    } catch (error) {
        console.error('gagal menambah pertanyaan', error);
    }
}

  return (
    <>
    <div>
   <p className="text-md inline mr-3">
     <b>Input Pertanyaan</b>
   </p>
 </div>
 <input
       class="appearance-none mt-2 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
       value={pertanyaan}
       onChange={(e) => setPertanyaan(e.target.value)}
       type="text"
     />
 <div className="flex justify-end mt-1">
   <button o className="btn btn-primary w-1/6" onClick={handlePertanyaan}>
     Submit
   </button>
 </div>
</>
  )
}
