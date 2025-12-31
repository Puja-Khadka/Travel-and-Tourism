import React, { useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [formData,setFormData]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData);
    
    alert("email submit")
    setFormData({email:""})
  }
  return (
    <>
    <footer className='bg-black  h-60 px-20'>
      <div className='container mx-auto py-10'>
         <div className='grid grid-cols-4 gap-10 justify-between text-white'>
          <div>
            <h1 className='text-2xl font-bold'>Company</h1>
            <ul className='my-5 '>
          <span className='flex gap-2 items-center'>  <MdArrowForwardIos/>
              <li className=' font-bold transform-3d transition-transform hover:translate-x-1'> About Us</li>
               </span> 
           <span className='flex gap-2 items-center '>  <MdArrowForwardIos/>
            <li className=' font-bold transform-3d transition-transform hover:translate-x-1 '>  Contact Us</li>
             </span> 
           <span className='flex gap-2 items-center '>  <MdArrowForwardIos/>
            <li className=' font-bold transform-3d transition-transform hover:translate-x-1 '>  Privacy Policy</li>
             </span> 
           <span className='flex gap-2 items-center '>  <MdArrowForwardIos/>
            <li className=' font-bold transform-3d transition-transform hover:translate-x-1 '>  Term and Condition</li>
             </span> 
           <span className='flex gap-2 items-center '>  <MdArrowForwardIos/>
            <li className=' font-bold transform-3d transition-transform hover:translate-x-1 '>  FAQs and Help</li>
             </span> 
            
            </ul>
          </div>
          <div>
            <h1 className='text-2xl font-bold'>Contact</h1>
            <ul className='my-5 '>
          <span className='flex gap-2 items-center'>  <IoLocationSharp />
              <li className=' font-bold '>123 Street,New York,USA</li>
               </span> 
           <span className='flex gap-2 items-center '>  <FaPhone />
            <li className=' font-bold  '>  Contact Us</li>
             </span> 
           <span className='flex gap-2 items-center '>  <IoIosMail />
            <li className=' font-bold  '>  Privacy Policy</li>
             </span> 
            <div className='flex gap-3  mt-2'>
              <span className='w-8 h-8 rounded-full border-2 flex items-center justify-center '><FaTwitter /> </span>
              <span className='w-8 h-8 rounded-full border-2 flex items-center justify-center '><FaFacebookF /> </span>
              <span className='w-8 h-8 rounded-full border-2 flex items-center justify-center '><FaYoutube /> </span>
              <span className='w-8 h-8 rounded-full border-2 flex items-center justify-center '><FaLinkedinIn /> </span>
            </div>
            </ul>
          </div>
          <div>
            <h1 className='text-2xl font-bold'>Gallery</h1>
             <div className='grid grid-cols-3 gap-2 mt-3'>
               <img className='w-20 h-15 object-cover border-4' src="https://media.timeout.com/images/103674438/750/562/image.jpg" alt="" />
               <img className='w-20 h-15 object-cover border-4' src="https://acko-cms.ackoassets.com/places_to_visit_in_usa_4997abe652.png" alt="" />
               <img className='w-20 h-15 object-cover border-4' src="https://media.timeout.com/images/106157364/750/562/image.jpg" alt="" />
               <img className='w-20 h-15 object-cover border-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrFygaifNv7FTm0byz-6_ojFjSizaCk7fjw&s" alt="" />
               <img className='w-20 h-15 object-cover border-4' src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="" />
               <img className='w-20 h-15 object-cover border-4' src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
             </div>
          </div>
          <div>
            <h1 className='text-2xl font-bold'>Newsletter</h1>
             <p className='font-semibold my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, velit.</p>
            
             <form onSubmit={handleSubmit} className='relative w-fit'>
             <input type="text" name='email' value={formData.email} placeholder='Your email' className='py-4 pl-4 pr-28 border-2 w-full outline-none' onChange={(e)=>setFormData(e.target.value)}/>
            
             <button type='submit' className='absolute top-1/2 right-2 -translate-y-1/2
               bg-green-500 text-white px-4 py-2 rounded
               hover:bg-green-600 transition cursor-pointer'>SignUp</button>
             </form>
          </div>

         </div>
      </div>
    </footer>
    </>
  )
}

export default Footer