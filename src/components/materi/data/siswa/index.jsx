import React from 'react'
import FetchRangkum from './fetchRangkum'
import Style from './style.module.css'
export default function index() {
  return (
    <>
    <div className='max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg mt-4 shadow hover:bg-gray-100'>
    <FetchRangkum/>
    </div>

    </>
  )
}
