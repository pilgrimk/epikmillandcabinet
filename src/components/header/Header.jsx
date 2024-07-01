import React from 'react'

const Header = ({ title }) => {
  return (
    <div className=' w-full flex flex-col bg-accent-light-50 items-center py-[70px]'>
      <div className='w-full m-8 text-3xl text-center'>
        <p className='font-serif italic text-slate-700 font-bold'>{title}</p>
      </div>
      <span className="h-1 w-3/4 m-4 bg-accent-dark-100 lg:w-1/2"></span>
    </div>
  )
}

export default Header