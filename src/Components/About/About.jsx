
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
      <section className=" container mx-auto mt-25 ">
        <div className="grid grid-cols-2  gap-15 px-15">
          <div>
            <img
              className="w-150 h-110 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTXaIVy9mMIGZij1T09YxF8oSKxzNO7cULQ&s"
              alt=""
            />
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-green-800 font-bold">
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
        <section className="container mx-auto mt-25">  
               <h3 className="flex items-center justify-center text-green-800 gap-2 font-bold text-xl"> <BsThreeDots /> TRAVEL GUIDE <BsThreeDots /></h3>
               <h1 className="text-center text-3xl font-bold">Meet Our Guide</h1>
               <div className="grid grid-cols-4 gap-6 px-20 my-9">
                <div className=" relative shadow-lg bg-white group overflow-hidden">
                   <img className=" transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1503232125/photo/happy-smile-and-portrait-of-business-man-in-city-for-professional-corporate-and-pride.jpg?s=612x612&w=0&k=20&c=uPu3GKHW507ruenLY8xwsB3OgOSwLSWjE3fBpy20Hac=" alt="" />
                   <div className="flex items-center justify-center gap-2 absolute top-39 left-20 ">
                     <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white hover:bg-green-500  "> <FaFacebook className="text-green-700 "/> </span>  
                     <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 "> <FiTwitter className="text-green-700"/> </span>  
                     <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 "> <FaInstagram className="text-green-700"/> </span>  
                        
                   </div>
                  <div className="text-center my-8">
                   <h4 className="font-bold">Full Name</h4>
                   <h5 className="text-gray-700">Destination</h5>
                   </div>
                </div>
                <div className=" relative shadow-lg bg-white group overflow-hidden">
                   <img className=" transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=170667a&w=is&k=20&c=LOfI0wy7T0jFnKYmMOmNYYnqH1v9nLCD3pCCau10_bg=" alt="" />
                   <div className="flex items-center justify-center gap-2 absolute top-40 left-20 ">
                     <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white hover:bg-green-500 "> <FaFacebook className="text-green-700"/> </span>  
                     <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 "> <FiTwitter className="text-green-700"/> </span>  
                     <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 "> <FaInstagram className="text-green-700"/> </span>  
                        
                   </div>
                  <div className="text-center my-8">
                   <h4 className="font-bold">Full Name</h4>
                   <h5 className="text-gray-700">Destination</h5>
                   </div>
                </div>
                <div className=" relative shadow-lg bg-white group overflow-hidden">
                   <img className=" transition-transform duration-300 group-hover:scale-105" src="https://www.shutterstock.com/image-photo/confident-middle-aged-business-man-260nw-2516789501.jpg" alt="" />
                   <div className="flex items-center justify-center gap-2 absolute top-40 left-20 ">
                     <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white hover:bg-green-500 "> <FaFacebook className="text-green-700"/> </span>  
                     <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 "> <FiTwitter className="text-green-700"/> </span>  
                     <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 "> <FaInstagram className="text-green-700"/> </span>  
                        
                   </div>
                  <div className="text-center my-8">
                   <h4 className="font-bold">Full Name</h4>
                   <h5 className="text-gray-700">Destination</h5>
                   </div>
                </div>
                <div className=" relative shadow-lg bg-white group overflow-hidden">
                   <img className=" transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1503232125/photo/happy-smile-and-portrait-of-business-man-in-city-for-professional-corporate-and-pride.jpg?s=612x612&w=0&k=20&c=uPu3GKHW507ruenLY8xwsB3OgOSwLSWjE3fBpy20Hac=" alt="" />
                   <div className="flex items-center justify-center gap-2 absolute top-39 left-20 ">
                     <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white hover:bg-green-500 "> <FaFacebook className="text-green-700"/> </span>  
                     <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 "> <FiTwitter className="text-green-700"/> </span>  
                     <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 "> <FaInstagram className="text-green-700"/> </span>  
                        
                   </div>
                  <div className="text-center my-8">
                   <h4 className="font-bold">Full Name</h4>
                   <h5 className="text-gray-700">Destination</h5>
                   </div>
                </div>
               
               </div>
            </section>
      </>
    )
  }
  
  export default About