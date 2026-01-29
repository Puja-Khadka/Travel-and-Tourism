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

    <section className="container mx-auto mt-25">
            <h3 className="flex gap-2 items-center justify-center text-xl font-bold text-green-800">
              <BsThreeDots className="text-1xl" /> SERVICES
              <BsThreeDots className="text-1xl" />
            </h3>
            <h1 className="text-center font-bold text-3xl">Our Services</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10  px-10 ">
              {card.map(({ id, image, title, description }) => (
                <div
                  key={id}
                  className="bg-white shadow-2xl rounded-lg p-4 relative group"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-96 h-22 md:w-full md:h-48 object-cover rounded-t-lg relative z-5"
                  />
                  <h2 className="text-sm md:text-xl font-bold mt-4 relative z-5 ">
                    {title}
                  </h2>
                  <p className="text-gray-800 mt-2 relative z-5 group-hover:text-white">
                    {description}
                  </p>
                  <div className="absolute inset-0 group-hover:bg-green-800  group-hover:scale-110   hover:shadow-2xl transition-transform  duration-300 rounded-lg ease-in-out"></div>
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
                    className="w-96 h-22md:w-full md:h-48 object-cover rounded-t-lg"
                  />
                  <h2 className=" text-sm md:text-xl font-bold mt-4   ">{title}</h2>
                  <p className="text-gray-800 mt-2 ">{description}</p>
                </div>
              ))}
            </div>
          </section>
           <section className="container mx-auto my-16 px-4 md:px-0">
                  <h3 className="flex items-center gap-3 justify-center text-lg md:text-xl font-bold text-green-800">
                    <BsThreeDots className="text-lg md:text-xl" /> DESTINATION
                    <BsThreeDots className="text-lg md:text-xl" />
                  </h3>
          
                  <h1 className="text-center text-2xl md:text-3xl font-bold">
                    Popular Destination
                  </h1>
          
                  <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4 px-0 sm:px-10 md:px-30 mt-5">
                    <img
                      className="w-full h-56 sm:h-48 object-cover shadow transform transition-transform duration-500 hover:scale-110"
                      src="https://media.timeout.com/images/103674438/750/562/image.jpg"
                      alt=""
                    />
                    <img
                      className="w-full h-56 sm:h-48 object-cover shadow transform transition-transform duration-500 hover:scale-110"
                      src="https://acko-cms.ackoassets.com/places_to_visit_in_usa_4997abe652.png"
                      alt=""
                    />
                    <img
                      className="w-full h-56 sm:h-48 object-cover shadow transform transition-transform duration-500 hover:scale-110"
                      src="https://media.timeout.com/images/106157364/750/562/image.jpg"
                      alt=""
                    />
                    <img
                      className="w-full h-56 sm:h-48 object-cover shadow transform transition-transform duration-500 hover:scale-110"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrFygaifNv7FTm0byz-6_ojFjSizaCk7fjw&s"
                      alt=""
                    />
                  </div>
                </section>
    </>
  )
}

export default Services