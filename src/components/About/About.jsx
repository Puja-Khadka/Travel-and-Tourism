
  import React from 'react'
import NavBar from '../NavBar/NavBar'
import { FaArrowRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Button } from '../ui/button';
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

  
  function About() {
    return (
      <>
      <NavBar title="About Us" subtitle={'Home|About'}/>
     <section className=" container mx-auto my-25 ">
             <div className="grid grid-cols-1 md:grid-cols-2  gap-15 px-15">
               <div>
                 <img
                   className=" w-200 h-80 md:w-150 md:h-110 "
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTXaIVy9mMIGZij1T09YxF8oSKxzNO7cULQ&s"
                   alt=""
                 />
               </div>
               <div className="">
                 <h3 className="flex  items-center gap-2 text-green-800 font-bold">
                   ABOUT US <BsThreeDots className="text-green-800 text-2xl" />
                 </h3>
                 <h1 className="text-4xl font-bold">
                   Welcome to <span className="text-green-800">Tourist</span>
                 </h1>
                 <p className="mt-5 text-gray-600 font-semibold">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Reprehenderit quae consequuntur in placeat, natus, quidem officia
                   error fugiat maiores nostrum excepturi dignissimos reiciendis
                   unde.
                 </p>
                 <p className="mt-5 text-gray-600 font-semibold">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                   quis, sit placeat distinctio quod expedita, magni aliquid tempore
                   dolorem voluptatem, numquam soluta perspiciatis facere dignissimos
                   architecto vero sed est blanditiis?
                 </p>
                 <ul className="mt-5 text-gray-600 font-semibold">
                   <li className="flex items-center gap-2">
                     <FaArrowRight /> First class flight
                   </li>
                   <li className="flex items-center gap-2">
                     <FaArrowRight /> 5 star Accommodation
                   </li>
                   <li className="flex items-center gap-2">
                     <FaArrowRight /> 150 Premium city tour
                   </li>
                 </ul>
                 <Button className={"px-6 py-7 mt-5 bg-green-800 font-bold"}>
                   Read More
                 </Button>
               </div>
             </div>
           </section>
      </>
    )
  }
  
  export default About