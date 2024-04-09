import React from 'react'
import { TbBrandBlogger } from "react-icons/tb";

function Logo() {
  return (
    <div className='flex items-center hover:cursor-pointer'>
    <TbBrandBlogger className='w-8 h-8 bg-yellow-500 rounded p-1' />
    <p className='w-auto h-8 ml-2 text-2xl text-slate-200 font-semibold'>Blogging</p>
    </div>
  )
}

export default Logo