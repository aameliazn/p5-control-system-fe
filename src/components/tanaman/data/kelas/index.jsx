import React from 'react'
import FetchSiswa from './fetchSiswa'

export default function index() {
  return (
    <>
    <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div>Data Siswa A</div>
    <FetchSiswa/>
    </div>
    </>
  )
}
