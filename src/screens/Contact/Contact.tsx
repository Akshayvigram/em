import React, { useState } from "react";
// Assuming Button and Card components are styled using Tailwind
import { Button } from "../../components/ui/button";

// --- Placeholder Icons (These are simplified SVG/JSX for the dark box) ---
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.742 21 3 14.258 3 6V5z" /></svg>;
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>;
const IconSms = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.805A7.952 7.952 0 0012 4c4.97 0 9 3.582 9 8z" /></svg>;

// --- Helper Component for Contact Item Layout ---
const ContactDetailItem = ({ icon, title, content }: { icon: JSX.Element, title: string, content: string }) => (
  <div className="py-4 space-y-1">
    <div className="flex items-center space-x-2 text-gray-300">
      {icon}
      <h3 className="text-xs font-semibold">{title}</h3>
    </div>
    <p className="text-white text-xs pl-7">{content}</p>
  </div>
);

// --- Navigation Items (Original data retained) ---
// const navigationItems = [
//   { label: "HOME", href: "#" },
//   { label: "SHOP", href: "#" },
//   { label: "MOBILE APP", href: "#" },
//   { label: "REVIEWS", href: "#" },
//   { label: "CONTACT", href: "#" }, // This should be styled as active in the header
// ];


export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --- Header JSX (Reverted to original look + added sticky behavior) ---

  // --- End Header JSX ---

  return (
    <>


      {/* Outer container matching the light blue background of the image */}
      {/* Added pt-[120px] for header clearance */}
      <div className="min-h-screen">

        {/* Main Card Container (The illusion is created here) */}
        {/* The overall shadow and rounded corner is applied to a containing div */}
        <div className="max-w-2xl w-full flex shadow-xl rounded-[20px] overflow-hidden">

          {/* LEFT SIDE: Contact Form (White Box) */}
          {/* Adjusted to w-3/5 (60%) for the size difference */}
          <div
            className="w-[1111px] h-[544px] bg-[rgba(255,255,255,1)] p-10 flex flex-col"
            // Custom border radius to keep left corners rounded, and square on the right side
            style={{
              borderRadius: '10px',
              top: '216px',
              left: '112px',
              position: 'absolute',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }}
          >

            {/* Form Header */}
            <h2 className="text-2xl font-Mochiy Pop P One" style={{ color: 'rgba(4, 42, 75, 1)' }}>
              Send us a message
            </h2>
            <p className="mb-10 mt-3 max-w-[618px] size-15" style={{ color: 'rgba(153, 153, 153, 1)' }}>
              Do you have a question? A complaint? Or need any help to choose the right product from Zalomi. Feel free to contact us
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1: First Name / Last Name */}
              <div className="flex space-x-6">
                <div className="w-[380px]">
                  <label htmlFor="firstName" className="text-xs font-normal text-gray-700 block mb-2 ml-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-[280px] ml-2 h-10 px-3 border border-gray-300 rounded-[8px] focus:ring-blue-500 focus:border-blue-500 text-xs"
                    placeholder="Enter Your First Name"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName" className="text-xs font-normal text-gray-700 block mb-2 ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-[280px] h-10 px-3 border border-gray-300 rounded-[8px] focus:ring-blue-500 focus:border-blue-500 text-xs"
                    placeholder="Enter Your Last Name"
                  />
                </div>
              </div>

              {/* Row 2: Email / Contact Details */}
              <div className="flex space-x-6">
                <div className="w-[380px]">
                  <label htmlFor="email" className="text-xs font-normal text-gray-700 block mb-2 ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[280px] ml-2 h-10 px-3 border border-gray-300 rounded-[8px] focus:ring-blue-500 focus:border-blue-500 text-xs"
                    placeholder="Enter Your Mail.ID"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="phoneNumber"
                    className="text-xs font-normal text-gray-800 block mb-2"
                  >
                    Contact Details
                  </label>

                  <div className="flex items-center border border-gray-300 rounded-[8px] overflow-hidden w-[280px]">
                    {/* Country Code Dropdown */}
                    <div className="flex items-center pl-3 pr-1">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="h-10 bg-white text-xs text-gray-700 font-medium focus:outline-none cursor-pointer pr-5 appearance-none"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path fill='gray' d='M0 0l5 6 5-6z'/></svg>\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 4px center",
                          backgroundSize: "8px 5px",
                        }}
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                      </select>

                      {/* Thin centered divider line */}
                      <div className="h-10 w-px bg-gray-300 ml-1"></div>
                    </div>

                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter Your Mobile Number"
                      className="flex-1 h-10 px-3 text-xs text-gray-700 placeholder-gray-400 focus:outline-none font-normal"
                    />
                  </div>
                </div>



              </div>

              {/* Row 3: Message */}
              <div>
                <label htmlFor="message" className="text-xs font-normal text-gray-700 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-[700px] px-3 py-2 border border-gray-300 rounded-[8px] focus:ring-blue-500 focus:border-blue-500 text-xs resize-none"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex">
                <Button
                  type="submit"
                  className="bg-[rgba(4,42,75,1)] hover:bg-[#043d67] text-white font-medium rounded transition-colors text-xs ml-auto mr-[30%]"
                  style={{
                    width: '161px',
                    height: '34px',
                    borderRadius: '20px',
                  }}
                >
                  Send a message
                </Button>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE: Contact Details Sidebar (Dark Box) */}
          {/* Adjusted width to w-2/5 (40%) and custom rounded corner */}
          <div
            className=" w-[396px] h-[598px] bg-[rgba(4,42,75,1)] text-white p-10 flex flex-col justify-between"
            style={{
              borderRadius: '40px',
              top: '186px',
              left: '932px',
              position: 'absolute',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            }}
          >

            <div className=" w-[257px] h-[58px] top-[61px] left-[38px] absolute">
              <h2 className="text-[20px] font-Mochiy Pop P One mb-8">
                Hi! we are Always here to help you
              </h2>
            </div>

            <div>
              {/* Contact Items */}
              {/* Uses divider and padding to create the horizontal lines seen in the image */}
              <div className="w-[320px]  h-[75px]  top-[159px]  left-[38px]  angle-0deg  opacity-1 border-radius-4px absolute">
                <div className="bg-[#2c4a5e] rounded-lg p-4 flex items-start space-x-3">
                  <IconPhone />
                  <div>
                    <h3 className=" w-[58px]  h-[17px]  top-[21px]  left-[74px]  angle-0 deg  opacity-1 text-xs Mochiy Pop P One text-white">Helpline</h3>
                    <p className="text-white text-xs">+91 9874563210</p>
                  </div>
                </div>

                <div className="bg-[#2c4a5e] rounded-lg p-4 flex items-start space-x-3 mt-4">
                  <div className="text-white flex-shrink-0 justify-center items-center">
                    <IconMail />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-300">Email</h3>
                    <p className="text-white text-xs">azhizensolutions@azhzen.com</p>
                  </div>
                </div>

                <div className="bg-[#2c4a5e] rounded-lg p-4 flex items-start space-x-3 mt-4">
                  <IconSms />
                  <div>
                    <h3 className="text-xs font-semibold text-gray-300">SMS/ What's app</h3>
                    <p className="text-white text-xs">+91 9874563210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-10">
              <h3 className="text-sm bg-[rgba(255, 255, 255, 1)] mb-3">Follow us!</h3>
              <div className="flex justify-between text-white">
                {/* Social icons (use font or SVG icons for production) */}
                <a href="#" className="bg-[rgba(255, 255, 255, 1)] transition-colors flex items-center justify-center w-8">
                  <span className="text-xl">f</span>
                </a>
                <a href="#" className="bg-[rgba(255, 255, 255, 1)] hover:text-gray-400 transition-colors flex items-center justify-center w-8">
                  <span className="text-xl">in</span>
                </a>
                <a href="#" className="bg-[rgba(255, 255, 255, 1)] hover:text-gray-400 transition-colors flex items-center justify-center w-8">
                  <span className="text-xl">t</span>
                </a>
                <a href="#" className="bg-[rgba(255, 255, 255, 1)] hover:text-gray-400 transition-colors flex items-center justify-center w-8">
                  <span className="text-xl">wa</span>
                </a>
                <a href="#" className="bg-[rgba(255, 255, 255, 1)] hover:text-gray-400 transition-colors flex items-center justify-center w-8">
                  <span className="text-xl">X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

