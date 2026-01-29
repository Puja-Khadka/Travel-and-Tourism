import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import NavBar from "../NavBar/NavBar";

function Home() {
  const [card, setCard] = useState([]);
  const [places, setPlaces] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    date: "",
    destination: "",
    textarea: "",
  });

  function handleChange(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  const handlefocus = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setValue(timeString);
  };
  useEffect(() => {
    fetch("https://mocki.io/v1/7f0f638c-70c9-4ea9-a56d-7199558b55a3")
      .then((res) => res.json())
      .then((data) => setPlaces(data.services));
  }, []);
  useEffect(() => {
    fetch("https://mocki.io/v1/a77552e8-58ad-4610-8b25-f3b5db28602c")
      .then((res) => res.json())

      .then((data) => {
        setCard(data.services);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    alert("Message sent successfully!");
    setFormdata({
      name: "",
      email: "",
      date: "",
      destination: "",
      textarea: "",
    });
  };

  return (
    <>
      <NavBar title="Explore USA" subtitle="Discover amazing destinations" />
      <section className=" container mx-auto mt-25 ">
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
      <section className="container mx-auto mt-16 px-4 md:px-0">
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

      <section className="container mx-auto mt-16 px-4 md:px-0">
        <h3 className="flex items-center justify-center gap-2 text-green-800 text-lg md:text-xl font-bold">
          <BsThreeDots className="text-lg md:text-xl" /> PACKAGES
          <BsThreeDots className="text-lg md:text-xl" />
        </h3>

        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Awesome Packages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 sm:px-8 md:px-20 mt-10">
          {places.map(({ id, image, title, price, rating, description }) => (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <img
                className="w-full h-56 sm:h-48 object-cover transition-transform duration-500 hover:scale-110"
                src={image}
                alt={title}
              />

              <p className="text-center my-3 font-bold">{price}</p>

              <p className="flex items-center text-yellow-500 gap-2 justify-center">
                {rating}
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
              </p>

              <p className="text-center text-sm my-3 px-3">{description}</p>

              <div className="my-4 flex justify-center">
                <Button className="rounded-l-full rounded-r-none px-4">
                  Read More
                </Button>

                <div className="w-px bg-gray-300"></div>

                <Button className="rounded-r-full rounded-l-none px-4">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div>
          <div
            className="container mx-auto relative min-h-150 md:min-h-130 bg-center overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white px-3 md:px-30 py-12 md:py-20">
              <div>
                <h4 className="font-bold">Booking</h4>
                <h1 className="font-bold text-2xl md:text-3xl my-4">
                  Online Booking
                </h1>
                <p className="my-3 font-semibold text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis quasi voluptatum similique culpa dolorum cupiditate
                  porro perferendis veniam ipsam!
                </p>
                <p className="my-5 font-semibold text-sm md:text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo quo vero in veritatis et autem obcaecati, dicta esse
                  praesentium nihil?
                </p>
                <Button className="bg-transparent border-2 rounded-none py-4 px-6 hover:text-white">
                  Read More
                </Button>
              </div>

              <div>
                <h1 className="font-bold text-2xl md:text-3xl mb-4">
                  Book a Tour
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      className="border-2 text-center py-2 w-full text-black"
                      type="text"
                      name="name"
                      value={formdata.name}
                      placeholder="Enter Name"
                      onChange={handleChange}
                    />
                    <input
                      className="border-2 text-center py-2 w-full text-black"
                      type="email"
                      name="email"
                      value={formdata.email}
                      placeholder="Enter Email"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      className="border-2 py-3 px-4 w-full text-black"
                      type="date"
                      name="date"
                      value={formdata.date}
                      onFocus={handlefocus}
                      onChange={handleChange}
                    />

                    <input
                      list="destination-list"
                      name="destination"
                      placeholder="Destination"
                      value={formdata.destination}
                      onChange={handleChange}
                      className="border-2 py-3 text-center w-full text-black"
                    />

                    <datalist id="destination-list">
                      <option value="destination1" />
                      <option value="destination2" />
                    </datalist>
                  </div>

                  <textarea
                    className="w-full border-2 mt-3 py-4 px-3 text-black"
                    name="textarea"
                    value={formdata.textarea}
                    onChange={handleChange}
                    placeholder="Special Request"
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-none bg-transparent border-2 mt-3 py-4"
                  >
                    Book Now
                  </Button>
                </form>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/40 backdrop-brightness-90"></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-25">
        <h3 className="flex  items-center justify-center text-green-800 gap-2 font-bold text-xl">
          {" "}
          <BsThreeDots /> TRAVEL GUIDE <BsThreeDots />
        </h3>
        <h1 className="text-center text-3xl font-bold">Meet Our Guide</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-3 md:px-20  my-9">
          <div className=" relative shadow-lg bg-white group overflow-hidden">
            <img
              className=" transition-transform duration-300 group-hover:scale-105"
              src="https://media.istockphoto.com/id/1503232125/photo/happy-smile-and-portrait-of-business-man-in-city-for-professional-corporate-and-pride.jpg?s=612x612&w=0&k=20&c=uPu3GKHW507ruenLY8xwsB3OgOSwLSWjE3fBpy20Hac="
              alt=""
            />
            <div className="flex items-center justify-center gap-2 absolute top-53 left-30 md:top-39 md:left-20 ">
              <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white hover:bg-green-500  ">
                {" "}
                <FaFacebook className="text-green-700 " />{" "}
              </span>
              <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FiTwitter className="text-green-700" />{" "}
              </span>
              <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FaInstagram className="text-green-700" />{" "}
              </span>
            </div>
            <div className="text-center my-8">
              <h4 className="font-bold">Full Name</h4>
              <h5 className="text-gray-700">Destination</h5>
            </div>
          </div>
          <div className=" relative shadow-lg bg-white group overflow-hidden">
            <img
              className=" transition-transform duration-300 group-hover:scale-105"
              src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=170667a&w=is&k=20&c=LOfI0wy7T0jFnKYmMOmNYYnqH1v9nLCD3pCCau10_bg="
              alt=""
            />
            <div className="flex items-center justify-center gap-2 absolute top-55 left-30 md:top-39 md:left-20  ">
              <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FaFacebook className="text-green-700" />{" "}
              </span>
              <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FiTwitter className="text-green-700" />{" "}
              </span>
              <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FaInstagram className="text-green-700" />{" "}
              </span>
            </div>
            <div className="text-center my-8">
              <h4 className="font-bold">Full Name</h4>
              <h5 className="text-gray-700">Destination</h5>
            </div>
          </div>
          <div className=" relative shadow-lg bg-white group overflow-hidden">
            <img
              className=" transition-transform duration-300 group-hover:scale-105"
              src="https://www.shutterstock.com/image-photo/confident-middle-aged-business-man-260nw-2516789501.jpg"
              alt=""
            />
            <div className="flex items-center justify-center gap-2 absolute top-55 left-30 md:top-39 md:left-20  ">
              <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FaFacebook className="text-green-700" />{" "}
              </span>
              <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FiTwitter className="text-green-700" />{" "}
              </span>
              <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FaInstagram className="text-green-700" />{" "}
              </span>
            </div>
            <div className="text-center my-8">
              <h4 className="font-bold">Full Name</h4>
              <h5 className="text-gray-700">Destination</h5>
            </div>
          </div>
          <div className=" relative shadow-lg bg-white group overflow-hidden">
            <img
              className=" transition-transform duration-300 group-hover:scale-105"
              src="https://media.istockphoto.com/id/1503232125/photo/happy-smile-and-portrait-of-business-man-in-city-for-professional-corporate-and-pride.jpg?s=612x612&w=0&k=20&c=uPu3GKHW507ruenLY8xwsB3OgOSwLSWjE3fBpy20Hac="
              alt=""
            />
            <div className="flex items-center justify-center gap-2 absolute top-54 left-30 md:top-39 md:left-20  ">
              <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FaFacebook className="text-green-700" />{" "}
              </span>
              <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FiTwitter className="text-green-700" />{" "}
              </span>
              <span className="w-8 h-8 rounded-full border-2  flex items-center justify-center bg-white hover:bg-green-500 ">
                {" "}
                <FaInstagram className="text-green-700" />{" "}
              </span>
            </div>
            <div className="text-center my-8">
              <h4 className="font-bold">Full Name</h4>
              <h5 className="text-gray-700">Destination</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
