import React from 'react'
import FetchTable from './fetchTable'

export default function index() {
  return (
    <>
    <div className="max-w-sm w-full lg:max-w-full p-6 bg-[#f2f2f2] border border-[#73d802] rounded-lg shadow hover:bg-gray-100">
      <div className='mb-10 font-bold'>Data Siswa</div>
    <FetchTable/>
    </div>
    </>
  )
}
