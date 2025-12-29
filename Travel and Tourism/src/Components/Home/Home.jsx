import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { IoLocationSharp } from "react-icons/io5";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";


function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [card,setCard]=useState([])
  const [places,setPlaces]=useState([])
  useEffect(()=>{
    fetch("https://mocki.io/v1/7f0f638c-70c9-4ea9-a56d-7199558b55a3")
    .then(res=>res.json())
    .then(data=>setPlaces(data.services))
  },[])
  useEffect(()=>{
    fetch("https://mocki.io/v1/a77552e8-58ad-4610-8b25-f3b5db28602c")
    .then(res=>res.json())

    .then(data=>{
       
      setCard(data.services)})
  },[])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section className="relative  h-screen w-full  ">
        <nav
          className={`
          fixed  z-10 transition-all duration-300 border-b-2 border-gray-900
          ${
            scrolled
              ? "bg-white shadow-lg w-full mx-auto top-0 "
              : "bg-transparent w-full "
          }
        `}
        >
          <div
            className={`
    flex items-center justify-between transition-all duration-300 
    ${scrolled ? "px-8 py-4" : "px-10 py-5"}
  `}
          >
            <div className="flex items-center">
              <IoLocationSharp className="text-5xl text-green-800" />
              <h1 className="text-4xl font-bold text-green-800">Tourist</h1>
            </div>
            <div>
              <NavigationMenu className={"relative"}>
                <NavigationMenuList className={"flex gap-5"}>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={
                        "px-0 py-0 hover:bg-transparent hover:text-green-800 font-bold text-md hover:underline underline-offset-38 hover:decoration-2"
                      }
                    >
                      {" "}
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={
                        "px-0 py-0 hover:bg-transparent hover:text-green-800 font-bold text-md hover:underline underline-offset-38 hover:decoration-2"
                      }
                    >
                      {" "}
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={
                        "  text-black  px-0 py-0 bg-transparent hover:bg-transparent h-auto text-md font-bold hover:text-green-800 shadow-none border-none  data-[state=open]:text-green-800 hover:underline  data-[state=open]:hover:underline-offset-38 hover:decoration-2"
                      }
                    >
                      Service
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className={"  bg-white p- rounded-md shadow-md w-full "}
                    >
                      <ul className="flex flex-col max-w-60   ">
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-30 font-bold"
                            }
                          >
                            Services
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2 text-center py-1 hover:bg-gray-100 rounded w-30 font-bold"
                            }
                          >
                            Services Details
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={
                        "text-black  px-0 py-0 bg-transparent hover:bg-transparent h-auto text-md font-bold hover:text-green-800 shadow-none border-none  data-[state=open]:text-green-800 hover:underline  data-[state=open]:hover:underline-offset-38 hover:decoration-2"
                      }
                    >
                      Package
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className={"bg-white p- rounded-md shadow-md w-48 "}
                    >
                      <ul className=" flex flex-col max-w-60 ">
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-30 font-bold"
                            }
                          >
                            Packages
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-40 font-bold"
                            }
                          >
                            Packages Details
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={
                        "text-black  px-0 py-0 bg-transparent hover:bg-transparent h-auto text-md font-bold hover:text-green-800 shadow-none border-none  data-[state=open]:text-green-800 hover:underline  data-[state=open]:hover:underline-offset-38 hover:decoration-2"
                      }
                    >
                      Pages
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className={"bg-white p- rounded-md shadow-md w-48"}
                    >
                      <ul className="flex flex-col max-w-60 ">
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-30 font-bold"
                            }
                          >
                            FAQs
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-40 font-bold"
                            }
                          >
                            Booking
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-40 font-bold"
                            }
                          >
                            Destination
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-40 font-bold"
                            }
                          >
                            Travel Guides
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-40 font-bold"
                            }
                          >
                            Testimonial
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className={
                              " px-2  py-1 hover:bg-gray-100 rounded w-40 font-bold"
                            }
                          >
                            404 Page
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={
                        "px-0 py-0 hover:bg-transparent hover:text-green-800 font-bold text-md hover:underline underline-offset-38 hover:decoration-2"
                      }
                    >
                      {" "}
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <Button
                    className={
                      "py-4 px-5 rounded-4xl bg-green-800 font-bold text-md"
                    }
                  >
                    Register
                  </Button>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className={"h-full w-full"}
        >
          <CarouselContent className={"h-full"}>
            <CarouselItem className={"h-screen relative"}>
              <img
                src="https://hblimg.mmtcdn.com/content/hubble/img/america/mmt/destination/m_USA_l_515_887.jpg?im=Resize=(288,162)"
                alt="USA"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 "></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center ">
                <div>
                  <h1 className="text-4xl font-bold">Explore USA</h1>
                  <p className="text-black">Discover amazing destinations</p>
                  <button className="bg-green-700 px-3 py-2 mt-2">
                    view more
                  </button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className={"h-screen relative"}>
              <img
                src="https://media.istockphoto.com/id/1571494714/photo/view-of-golden-gate-bridge.jpg?s=612x612&w=0&k=20&c=VYSXTGOPzkNrXOY_UfNJMksDB8_iMLgF0m7FUuKdqnU="
                alt="Golden Gate"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 text-white flex items-center justify-center text-center">
                <div>
                  <h1 className="text-4xl font-bold">Golden Gate Bridge</h1>
                  <p className="text-black">San Francisco, California</p>
                  <button className="bg-green-700 px-3 py-2 mt-2">
                    view more
                  </button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className={"h-screen relative"}>
              <img
                src="https://media.gettyimages.com/id/608615480/photo/liberty-island-overlooking-manhattan-skyline.jpg?s=612x612&w=gi&k=20&c=Z8lmAhjBBS2JkIh4xcMFnFFPGnKTQrrp9Vvrf8u1y20="
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 text-white flex items-center justify-center text-center ">
                <div>
                  <h1 className="text-4xl font-bold">Statue of Liberty</h1>
                  <p className="text-black">New York City</p>
                  <button className="bg-green-700 px-3 py-2 mt-2">
                    view more
                  </button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </section>
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
        <h3 className="flex gap-2 items-center justify-center text-xl font-bold text-green-800">
          <BsThreeDots className="text-1xl"/> SERVICES <BsThreeDots className="text-1xl" />
        </h3>
        <h1 className="text-center font-bold text-3xl">Our Services</h1>
        <div className="grid grid-cols-4  gap-4 mt-10  px-10 " >
          {card.map(({ id, image, title, description }) => (
            <div key={id} className="bg-white shadow-2xl rounded-lg p-4 hover:-translate-y-2 hover:scale-105 hover:bg-green-800  hover:shadow-2xl transition-shadow duration-300 ">
              <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-4  ">{title}</h2>
              <p className="text-gray-800 mt-2">{description}</p>
              
            </div>
           
          ))}
          {card.map(({ id, image, title, description }) => (
            <div key={id} className="bg-white shadow-2xl rounded-lg p-4 hover:-translate-y-2 hover:scale-105 hover:bg-green-800 hover:text-white hover:shadow-2xl transition-shadow duration-300 ">
              <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-4   ">{title}</h2>
              <p className="text-gray-800 mt-2">{description}</p>
              
            </div>
           
          ))}
        </div>
      </section>
      <section className="container mx-auto mt-25">
      <h3 className="flex items-center gap-3 justify-center text-xl font-bold text-green-800"> <BsThreeDots className="text-1xl" /> DESTINATION <BsThreeDots  className="text-1xl" /></h3>
      <h1 className="text-center text-3xl font-bold">Popular Destination</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 px-30 mt-5 ">
        <img className="w-full h-48 object-cover  shadow  transform transition-transform duration-500 hover:scale-110" src="https://media.timeout.com/images/103674438/750/562/image.jpg" alt=""  />
        <img className="w-full h-48 object-cover shadow  transform transition-transform duration-500 hover:scale-110" src="https://acko-cms.ackoassets.com/places_to_visit_in_usa_4997abe652.png" alt="" />
        <img className="w-full h-48 object-cover shadow  transform transition-transform duration-500 hover:scale-110" src="https://media.timeout.com/images/106157364/750/562/image.jpg" alt="" />
        <img className="w-full h-48 object-cover shadow  transform transition-transform duration-500 hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrFygaifNv7FTm0byz-6_ojFjSizaCk7fjw&s" alt="" />
      </div>
      </section>
      <section className="container mx-auto mt-25">
        <h3 className="flex items-center justify-center gap-2 text-green-800 text-xl font-bold"><BsThreeDots className="text-1xl" /> PACKAGES <BsThreeDots className="text-1xl" /></h3>
        <h1 className="text-center text-3xl font-bold">Awesome Packages</h1>
       <div className="grid grid-cols-3 gap-5 px-20 mt-10">
      {places.map(({id,image,title,price,rating,description})=>(
         <div key={id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform -translate-y-3 hover:scale-110">
        <img  className="w-full h-48 object-cover transform transition-transform hover:scale-110" src={image} alt={title} />
        <p className="text-center my-3 font-bold">{price}</p>
        <p className="flex items-center text-yellow-500 gap-2 justify-center">{rating}  <MdOutlineStarBorder /> <MdOutlineStarBorder /> <MdOutlineStarBorder /> <MdOutlineStarBorder /> <MdOutlineStarBorder /></p>
        <p className="text-center text-sm my-3">{description}</p>
      <div className="my-3 flex justify-center ">
         <Button className={'rounded-r-none rounded-l-full'}>Read More</Button>   <div className="w-px bg-gray-300"></div> <Button className={'rounded-l-none rounded-r-full'}>Book Now</Button>
        </div> 
         </div>
      ))}
       </div>
      </section>
      <section>
        
      </section>

    </>
  );
}

export default Home;
