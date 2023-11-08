import React from 'react'
import InputQuest from './inputQuest'
import DataClass from './dataClass'
import DataQuest from './dataQuest'

export default function index() {
  return (
    <>
    <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <InputQuest/>
   </div>
   <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <DataQuest/>
   </div>
   <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
   <DataClass/>
   </div>
    </>
  )
}
