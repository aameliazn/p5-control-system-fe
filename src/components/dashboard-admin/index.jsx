import React from 'react'
import Header from './header'
import Chart from './chart'



export default function index() {
  return (
    <>
    <div>
    <Header/>
    </div>
   <div className='mt-4'>
    <Chart/>
   </div>
    </>
  )
}
