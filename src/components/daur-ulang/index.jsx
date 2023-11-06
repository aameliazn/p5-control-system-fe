import React from 'react'
import InputRuangan from './inputRuangan'
import DataSiswa from './dataSiswa'
import TableRuangan from './tableRuangan'

export default function index() {
  return (
   <>
   <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <InputRuangan/>
   </div>
   <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <TableRuangan/>
   </div>
   <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
   <DataSiswa/>
   </div>
   </>
  )
}
