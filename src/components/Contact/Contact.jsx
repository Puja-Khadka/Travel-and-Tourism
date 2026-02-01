import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { BsThreeDots } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    textarea: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", number: "", subject: "", textarea: "" });
  };

  return (
    <>
      <NavBar title="Contact Us" subtitle="Home|About|Services|Contact" />

      <section className="container mx-auto mt-25 mb-10 px-4 md:px-10">
        <h3 className="flex items-center gap-3 text-green-800 font-bold justify-center">
          <BsThreeDots /> CONTACT US <BsThreeDots />
        </h3>
        <h1 className="text-center font-bold text-3xl mt-3">
          Contact For Any Query
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div>
            <h2 className="font-bold text-2xl">Get In Touch</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <ul className="mt-6 space-y-5">
              <li className="flex items-center gap-3">
                <span className="w-12 h-12 bg-green-500 flex items-center justify-center rounded-full">
                  <FaLocationDot className="text-white text-lg" />
                </span>
                <div>
                  <p className="font-bold text-xl">Office</p>
                  <p>123 Street, USA</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-12 h-12 bg-green-500 flex items-center justify-center rounded-full">
                  <BsTelephoneFill className="text-white text-lg" />
                </span>
                <div>
                  <p className="font-bold text-xl">Mobile</p>
                  <p>+123 456 6789</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-12 h-12 bg-green-500 flex items-center justify-center rounded-full">
                  <IoIosMail className="text-white text-lg" />
                </span>
                <div>
                  <p className="font-bold text-xl">Email</p>
                  <p>info@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.669829320309!2d85.2852736!3d27.672576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1989d7c6f6e3%3A0x0!2zMjfCsDQwJzU3LjEiTiA4NcKwMTYnMTcuNSJF!5e0!3m2!1sen!2snp!4v1696158770123!5m2!1sen!2snp"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="rounded-lg"
            ></iframe>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  className="border-2 py-3 px-2 w-full rounded"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email"
                  className="border-2 py-3 px-2 w-full rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  placeholder="Mobile"
                  className="border-2 py-3 px-2 w-full rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  placeholder="Subject"
                  className="border-2 py-3 px-2 w-full rounded"
                  onChange={handleChange}
                />
              </div>

              <Textarea
                placeholder="Leave a message here"
                className="w-full border-2 py-4 px-2 rounded mt-2"
                name="textarea"
                value={formData.textarea}
                onChange={handleChange}
              />

              <Button className="w-full py-4 bg-green-500 font-bold rounded mt-2 hover:bg-green-600 transition">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
