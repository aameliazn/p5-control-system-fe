import React from 'react'
import Chart from './chart'
import Table from './table'

export default function index() {
  return (
    <>
 <div className="mt-1">
        <Chart />
      </div>
      
 <div className="mt-1">
        <Table />
      </div>
    </>
  )
}
