import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { BsThreeDots } from "react-icons/bs";

function Services() {
    const [card, setCard] = useState([]);
     useEffect(() => {
        fetch("https://mocki.io/v1/a77552e8-58ad-4610-8b25-f3b5db28602c")
          .then((res) => res.json())
    
          .then((data) => {
            setCard(data.services);
          });
      }, []);
  return (
    <>
    <NavBar title="Our Services"  subtitle="home|About|services"/>

     <section className="container mx-auto mt-25 mb-10">
            <h3 className="flex gap-2 items-center justify-center text-xl font-bold text-green-800">
              <BsThreeDots className="text-1xl" /> SERVICES{" "}
              <BsThreeDots className="text-1xl" />
            </h3>
            <h1 className="text-center font-bold text-3xl">Our Services</h1>
            <div className="grid grid-cols-4  gap-4 mt-10  px-10 ">
              {card.map(({ id, image, title, description }) => (
                <div
                  key={id}
                  className="bg-white shadow-2xl rounded-lg p-4 hover:-translate-y-2 hover:scale-105 hover:bg-green-800  hover:shadow-2xl transition-shadow duration-300 "
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <h2 className="text-xl font-bold mt-4  ">{title}</h2>
                  <p className="text-gray-800 mt-2">{description}</p>
                </div>
              ))}
              {card.map(({ id, image, title, description }) => (
                <div
                  key={id}
                  className="bg-white shadow-2xl rounded-lg p-4 hover:-translate-y-2 hover:scale-105 hover:bg-green-800 hover:text-white hover:shadow-2xl transition-shadow duration-300 "
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <h2 className="text-xl font-bold mt-4   ">{title}</h2>
                  <p className="text-gray-800 mt-2">{description}</p>
                </div>
              ))}
            </div>
          </section>
    </>
  )
}

export default Services