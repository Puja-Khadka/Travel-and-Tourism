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
    <footer className="bg-black text-white py-10 px-10 md:px-20">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10  text-white">
      
     
      <div>
        <h1 className="text-2xl font-bold">Company</h1>
        <ul className="my-5 space-y-2">
          {["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions", "FAQs and Help"].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 font-bold hover:text-green-500 transition">
              <MdArrowForwardIos className="text-green-500" /> {item}
            </li>
          ))}
        </ul>
      </div>

      
      <div>
        <h1 className="text-2xl font-bold">Contact</h1>
        <ul className="my-5 space-y-2">
          <li className="flex items-center gap-2 font-bold">
            <IoLocationSharp /> 123 Street, New York, USA
          </li>
          <li className="flex items-center gap-2 font-bold">
            <FaPhone /> +1 234 567 890
          </li>
          <li className="flex items-center gap-2 font-bold">
            <IoIosMail /> info@company.com
          </li>
        </ul>
        <div className="flex gap-3 mt-3">
          {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map((Icon, i) => (
            <span key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-green-500 transition">
              <Icon className="text-green-700" />
            </span>
          ))}
        </div>
      </div>

      
      <div>
        <h1 className="text-2xl font-bold">Gallery</h1>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[
            "https://media.timeout.com/images/103674438/750/562/image.jpg",
            "https://acko-cms.ackoassets.com/places_to_visit_in_usa_4997abe652.png",
            "https://media.timeout.com/images/106157364/750/562/image.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrFygaifNv7FTm0byz-6_ojFjSizaCk7fjw&s",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          ].map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i}`} className="w-full h-20 object-cover border-2 rounded-sm" />
          ))}
        </div>
      </div>

      
      <div>
        <h1 className="text-2xl font-bold">Newsletter</h1>
        <p className="font-semibold my-2 text-sm sm:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, velit.
        </p>
        <form onSubmit={handleSubmit} className="relative w-full mt-3">
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Your email"
            className="w-full py-3 pl-4 pr-28 border-2 rounded outline-none text-black"
            onChange={(e) => setFormData({ email: e.target.value })}
          />
          <button
            type="submit"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>

    </div>
  </div>
</footer>

    </>
  )
}

export default Footer