import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { BsThreeDots } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../ui/button';

function Contact() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    number:"",
    subject:"",
    textarea:"",
  })
  const handleChange=(e)=>{
      setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(formData);
     
      alert("Form submitted successfully!");
      setFormData({name:"",email:"",number:"",subject:"",textarea:""})
  }

  return (
    <>
    <NavBar title="Contact Us" subtitle="Home|About|Services|Contact"/>

    <section className=' container mx-auto mt-25 mb-10'>
     <h3 className='flex items-center gap-3 text-green-800 font-bold justify-center'><BsThreeDots /> CONTACT US <BsThreeDots /></h3>
     <h1 className='text-center font-bold text-3xl'>Contact For Any Query</h1>
     <div className='grid grid-cols-3 gap-10 px-20 mt-8'>
      <div>
        <h2 className='font-bold text-2xl'>Get In Touch</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
        <div className='mt-8'>
          <ul className='grid grid-rows-3 gap-3'>
            <div className='flex items-center gap-3'>
          <span className=' w-12 h-12 bg-green-500 flex items-center justify-center'>
             <FaLocationDot className='text-white'/>
             </span>
          <span> <li className='font-bold text-xl'>Office</li>
             <li>123 street,USA</li></span>  
             </div>
            <div className='flex items-center gap-3'>
          <span className=' w-12 h-12 bg-green-500 flex items-center justify-center'>
             <BsTelephoneFill className='text-white'/>
             </span>
            <span> <li className='font-bold text-xl'>Mobile</li>
            <li>+123 456 6789</li>
            </span>
             </div>
            <div className='flex items-center gap-3'>
          <span className=' w-12 h-12 bg-green-500 flex items-center justify-center'>
             <IoIosMail className='text-white'/>
             </span>
            <span> <li className='font-bold text-xl'>Email</li>
             <li>info@gmail.com</li>
             </span>
             </div>
          
          </ul>
          </div>
        
      </div>
      <div>
         <iframe
          src="https://www.google.com/maps/@27.672576,85.2852736,14z?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 grid-rows-2 gap-3'>
         <input type="text"
         name='name'
         value={formData.name}
         placeholder='Your Name'
         className='border-2 py-4 pl-3'
         onChange={handleChange}
          />
          <input type="email" 
          name='email'
         value={formData.email}
          placeholder='Your Email'
          className='border-2 py-4 pl-3'
          onChange={handleChange}
          />
          <input type="text"
          name='number'
          value={formData.number}
          placeholder='Mobile'
          className='border-2 py-4 pl-3'
          onChange={handleChange}
           />
          <input type="text"
          name='subject'
          value={formData.subject}
          placeholder='Subject'
          className='border-2 py-4 pl-3'
            onChange={handleChange}
           />
          </div>
          <div className='my-3 '>
            <Textarea  placeholder="Leave a message here"className={'py-6'} name="textarea" value={formData.textarea} onChange={handleChange}/>
          </div>
          <div>
            <Button className={'w-full py-6 bg-green-500 font-bold '}>Send Message</Button>
          </div>
        </form>
      </div>
     </div>
    </section>
    </>
  )
}

export default Contact