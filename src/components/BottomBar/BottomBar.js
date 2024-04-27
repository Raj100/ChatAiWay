import React from 'react'

const BottomBar = () => {
  return (
    <>
    <div className='fixed bottom-0 w-full h-20 bg-black md:hidden grid grid-cols-4 text-white text-2xl'>
        <div className='p-2 h-full flex items-center justify-center relative  bg-[#f07a00] text-black rounded-full '><i className="fa-solid fa-house"></i> <div className='absolute '></div></div>
        <div className='p-2 h-full flex items-center justify-center bg-[#f07a00] text-black rounded-full '><i className="fa-brands fa-wpexplorer"></i></div>
        <div className='p-2 h-full flex items-center justify-center bg-[#f07a00] text-black rounded-full '><i className="fa-solid fa-user"></i></div>
        <div className='p-2 h-full flex items-center justify-center  bg-[#f07a00] text-black rounded-full '><i className="fa-solid fa-gear"></i></div>
    </div>
    </>
  )
}

export default BottomBar
