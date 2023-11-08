'use client'
'use client'
import React, {useEffect, useState} from 'react'
import Style from './style.module.css'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { AiOutlineDownload } from 'react-icons/ai'

export default function fetchTable() {
  return (
    <>
     {/* apping/looping data disini */}
    <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div className="flex gap-4 text-md font-bold">Observasi Lingkungan Minggu 1  <a style={{ fontWeight: '700', fontSize: '25px', marginTop: '2px', cursor: 'pointer' }} ><AiOutlineDownload/></a></div>
        <div className={Style.cardQuest}>
          <div className='mb-4'>
            Pertanyaan 1
          </div>
        </div>
    </div>


    <div className="max-w-sm w-full mt-4 lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <div className="flex gap-4 text-md font-bold">Observasi Lingkungan Minggu 2  <a style={{ fontWeight: '700', fontSize: '25px', marginTop: '2px', cursor: 'pointer' }} ><AiOutlineDownload/></a></div>
    </div>
    </>
  )
}
