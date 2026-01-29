import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { IoLocationSharp } from "react-icons/io5";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { IoReorderThree } from "react-icons/io5";

function NavBar({ title, subtitle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuopen, setMenuOpen] = useState(false);
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
              <div className="hidden md:flex">
                <NavigationMenu className={"relative"}>
                  <NavigationMenuList className={"flex gap-5"}>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={
                          "px-0 py-0 hover:bg-transparent hover:text-green-800 font-bold text-md hover:underline underline-offset-38 hover:decoration-2"
                        }
                      >
                        {" "}
                        <NavLink to="/">Home</NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={
                          "px-0 py-0 hover:bg-transparent hover:text-green-800 font-bold text-md hover:underline underline-offset-38 hover:decoration-2"
                        }
                      >
                        {" "}
                        <NavLink to="/about">About</NavLink>
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
                              <NavLink to="/services">Services</NavLink>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              className={
                                " px-2 text-center py-1 hover:bg-gray-100 rounded w-30 font-bold"
                              }
                            >
                              <NavLink to="/services/details">
                                Services Details
                              </NavLink>
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
                              <NavLink to="/packages">Packages</NavLink>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              className={
                                " px-2  py-1 hover:bg-gray-100 rounded w-40 font-bold"
                              }
                            >
                              <NavLink to="/packages/details">
                                Packages Details
                              </NavLink>
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
                        <NavLink to="/contact"> Contact</NavLink>
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
              <div>
                <button
                  className="text-3xl   md:hidden"
                  onClick={() => setMenuOpen(!menuopen)}
                >
                  <IoReorderThree />
                </button>
              </div>
            </div>
            {menuopen && (
              <div className="absolute top-full left-0 w-full bg-white flex  flex-row gap-3 justify-center items-center md:hidden">
                <NavLink
                  to="/"
                  className="py-2 font-bold  text-center border-b border-gray-200"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="py-2 font-bold  text-center border-b border-gray-200"
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className="py-2 font-bold  text-center border-b border-gray-200"
                >
                  Services
                </NavLink>

                <NavLink
                  to="/packages"
                  className="py-2 font-bold  text-center border-b border-gray-200"
                >
                  Packages
                </NavLink>

                <NavLink
                  to="/contact"
                  className="py-2 font-bold  text-center border-b border-gray-200"
                >
                  Contact
                </NavLink>
              </div>
            )}
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
                  <h1 className="text-4xl font-bold">{title}</h1>
                  <p className="text-black">{subtitle}</p>
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
                  <h1 className="text-4xl font-bold">Golden Bridge </h1>
                  <p className="text-black">Lorem ipsum dolor sit.</p>
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
    </>
  );
}

export default NavBar;
