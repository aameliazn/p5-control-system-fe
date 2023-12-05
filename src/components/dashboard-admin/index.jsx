import React from 'react'
import FetchData from './fetchData'
import Tanaman from './tanaman'
import Absensi from './absensi'

export default function index() {
  return (
       <>
       <div>
       <FetchData/>
       </div>
       <div className='mt-4'>
        <Tanaman/>
       </div>
       
       <div className='mt-4'>
        <Absensi/>
       </div>
   </>
  )
}
