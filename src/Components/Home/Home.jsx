import React, { useState } from "react";
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

function Home() {
  return (
    <>
      <section className=" relative h-screen w-full">
        <nav className=" absolute top-0 z-30 w-full border-b-2 border-gray-800">
          <div className=" container mx-auto flex items-center justify-between py-5 px-10">
            <div className="flex items-center">
              <IoLocationSharp className="text-5xl text-green-800" />
              <h1 className="text-4xl font-bold text-green-800">Tourist</h1>
            </div>
            <div>
              <NavigationMenu>
                <NavigationMenuList className={"flex gap-5"}>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={
                        "px-0 py-0 hover:bg-transparent hover:text-green-400 font-bold text-md"
                      }
                    >
                      {" "}
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={
                        "px-0 py-0 hover:bg-transparent hover:text-green-400 font-bold text-md"
                      }
                    >
                      {" "}
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-0 py-0 bg-transparent hover:bg-transparent hover:text-green-400 font-bold text-md">
                      services
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
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
    </>
  );
}

export default Home;
