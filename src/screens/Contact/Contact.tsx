import React, { useState } from "react";
// Assuming Button and Card components are styled using Tailwind
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// --- Placeholder Icons (These are simplified SVG/JSX for the dark box) ---
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.742 21 3 14.258 3 6V5z" /></svg>;
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>;
const IconSms = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.805A7.952 7.952 0 0012 4c4.97 0 9 3.582 9 8z" /></svg>;

// --- Helper Component for Contact Item Layout ---
const ContactDetailItem = ({ icon, title, content }: { icon: JSX.Element, title: string, content: string }) => (
  <div className="py-4 space-y-1">
    <div className="flex items-center space-x-2 text-gray-300">
      {icon}
      <h3 className="text-sm font-semibold">{title}</h3>
    </div>
    <p className="text-white text-base pl-7">{content}</p>
  </div>
);

// --- Navigation Items (Original data retained) ---
const navigationItems = [
  { label: "HOME", href: "#" },
  { label: "SHOP", href: "#" },
  { label: "MOBILE APP", href: "#" },
  { label: "REVIEWS", href: "#" },
  { label: "CONTACT", href: "#" }, // This should be styled as active in the header
];


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
      <div className="min-h-screen bg-[#F0F8FF] pt-[120px] pb-20 flex justify-center">
        
        {/* Main Card Container (The illusion is created here) */}
        {/* The overall shadow and rounded corner is applied to a containing div */}
        <div className="max-w-6xl w-full flex shadow-xl rounded-[20px] overflow-hidden"> 

          {/* LEFT SIDE: Contact Form (White Box) */}
          {/* Adjusted to w-3/5 (60%) for the size difference */}
          <div 
            className="w-[60%] bg-white p-12"
            // Custom border radius to keep left corners rounded, and square on the right side
            style={{ borderRadius: '30px 0 0 20px' }} 
          >
            
            {/* Form Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send us a message
            </h2>
            <p className="text-sm text-gray-500 mb-10 max-w-md">
              Do you have a question? A complaint? Or need any help to choose the right product from Zalomi. Feel free to contact us
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: First Name / Last Name */}
              <div className="flex space-x-6">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="text-sm font-normal text-gray-700 block mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-10 px-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Enter Your First Name"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName" className="text-sm font-normal text-gray-700 block mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-10 px-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Enter Your Last Name"
                  />
                </div>
              </div>

              {/* Row 2: Email / Contact Details */}
              <div className="flex space-x-6">
                <div className="w-1/2">
                  <label htmlFor="email" className="text-sm font-normal text-gray-700 block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-10 px-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Enter Your Mail.ID"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="phoneNumber" className="text-sm font-normal text-gray-700 block mb-1">
                    Contact Details
                  </label>
                  <div className="flex space-x-1">
                    {/* Country Code Dropdown */}
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="h-10 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500 pr-0"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                    </select>
                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full h-10 px-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Enter Your Mobile Number"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label htmlFor="message" className="text-sm font-normal text-gray-700 block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-right">
                <Button
                  type="submit"
                  className="bg-[#032a4a] hover:bg-[#043d67] text-white font-medium px-6 py-2 rounded transition-colors text-sm"
                >
                  Send a message
                </Button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE: Contact Details Sidebar (Dark Box) */}
          {/* Adjusted width to w-2/5 (40%) and custom rounded corner */}
          <div 
            className="w-[40%] bg-[#032a4a] text-white p-10 flex flex-col justify-between"
            style={{ borderRadius: '0 20px 20px 0' }} // Apply the large radius to the dark box corners
          >
            <div>
              <h2 className="text-2xl font-bold mb-8">
                Hi! we are Always here to help you
              </h2>

              {/* Contact Items */}
              {/* Uses divider and padding to create the horizontal lines seen in the image */}
              <div className="divide-y divide-white/10"> 
                <ContactDetailItem 
                  icon={<IconPhone />} 
                  title="Helpline" 
                  content="+91 9874563210" 
                />
                <ContactDetailItem 
                  icon={<IconMail />} 
                  title="Email" 
                  content="azhizensolutions@azhzen.com" 
                />
                <ContactDetailItem 
                  icon={<IconSms />} 
                  title="SMS/ What's app" 
                  content="+91 9874563210" 
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-10">
              <h3 className="text-sm text-gray-400 mb-3">Follow us!</h3>
              <div className="flex space-x-4 text-white">
                {/* Social icons (use font or SVG icons for production) */}
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <span className="text-xl">f</span>
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <span className="text-xl">in</span>
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <span className="text-xl">t</span>
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <span className="text-xl">wa</span>
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
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