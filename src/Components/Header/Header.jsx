
import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Header() {
  return (
    <>
    <header className='bg-black py-3 md:py-1'>
    <div className=' container mx-auto  flex flex-col md:flex-row  justify-between items-center '>
        <div className='flex flex-col md:flex-row text-white gap-3 py-2 ml-12'>
            <span className=' flex text-sm gap-2'><MdOutlineLocationOn  size={20}/>123 Street,New York,USA</span>
            <span className='flex text-sm gap-2'><BsTelephone  size={18} />+012 345 678</span>
            <span className='flex text-sm gap-2'><CiMail size={20} />Info@gmail.com</span>
        </div>
        <div className='text-white   flex  gap-3  mr-0 md:mr-12'>
            <span className='w-8 h-8 rounded-full border border-white flex items-center justify-center'><IoLogoTwitter /></span>
            <span className='w-8 h-8 rounded-full border border-white flex items-center justify-center'><FaFacebookF /></span>
            <span className='w-8 h-8 rounded-full border border-white flex items-center justify-center'><FaLinkedinIn  /></span>
            <span className='w-8 h-8 rounded-full border border-white flex items-center justify-center'><FaInstagramSquare /></span>
        </div>
    </div>
    </header>
    </>
  )
}

export default Header