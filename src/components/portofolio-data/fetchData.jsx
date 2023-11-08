'use client'

import React, {useState, useEffect} from 'react'
import Style from  './style.module.css'
import axios from 'axios'

export default function fetchData() {
    const [pdf, usePdf] = useState([]);

    //get
    useEffect(() => {
        axios.get('').then((response) => {
            usePdf(response.data);
        });
    }, []);

  return (
    <>
    <div className='text-md font-bold'>Data Siswa</div>

    <div>
        
    </div>
    </>
  )
}
