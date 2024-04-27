import React from 'react'
import Link from 'next/link'
const IconSideMenu = ({isOpen}) => {
  return (
    <>
      <div className={`fixed text-3xl text-white flex items-center pt-10 flex-col h-full top-16 left-0 bg-black p-4 rounded-md cursor-pointer translate duration-150 ${isOpen ? "translate-x-0": "-translate-x-32"}  w-20`}>
        <Link href="/"><div className='border-b py-2'><i class="fa-solid fa-house"></i></div></Link>
        <Link href="Chat"><div className='border-b py-2'><i class="fa-regular fa-comment-dots"></i></div></Link>
        <Link href="Profile"><div className='border-b py-2'><i class="fa-solid fa-user"></i></div></Link>
        <Link href="Dashboard"><div className='border-b py-2'><i class="fa-brands fa-bots"></i></div></Link>
        <Link href="/Plans"><div className='border-b py-2'><i class="fa-solid fa-cart-shopping"></i></div></Link>

      </div>
    </>
  )
}

export default IconSideMenu
