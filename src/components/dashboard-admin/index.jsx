import React from 'react'
import Header from './header'
import Chart from './chart'
import DataPengerjaan from './DataPengerjaan'


export default function index() {
  return (
    <>
    <div>
    <Header/>
    </div>
   <div className='mt-4'>
    <Chart/>
   </div>
   <div className='mt-4'>
    <DataPengerjaan/>
   </div>
    </>
  )
}
