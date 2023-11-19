import React from 'react'
import Header from './header'
import Table from './table'

export default function index() {
  return (
    <>
    <div className='mt-2'>
    <Header/>
    </div>
    <div className="mt-4">
        <Table/>
    </div>
    </>
  )
}
