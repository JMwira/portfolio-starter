import React from 'react';
import {BiHomeAlt, BiUser} from "react-icons/bi"
import {BsClipboardData, BsBriefcase, BsChatSquare} from "react-icons/bs"
import {Link} from "react-scroll"

const Nav = () => (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50' >
    <div className='container mx-auto'>
      <div className='w-full h-[96px] rounded-full px-5 text-2xl text-white/50 items-center flex justify-between max-w-[460px] mx-auto bg-black/20 backdrop-blur-2xl' >
        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt/>
        </Link>
        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser/>
        </Link>
        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardData/>
        </Link>
        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsBriefcase/>
        </Link>
      </div>
    </div>
  </nav>
)

export default Nav;
