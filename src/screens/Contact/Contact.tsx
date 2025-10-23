import React, { useState } from "react";
import { Button } from "../../components/ui/button";

// --- Contact Icons ---
const IconPhone = () => <img src="/helpline.png" className="w-6 h-6 mt-1" alt="Phone Icon" />;
const IconMail = () => <img src="/email.png" className="w-6 h-6 mt-1" alt="Mail Icon" />;
const IconSms = () => <img src="/sms.png" className="w-6 h-6 mt-1" alt="SMS Icon" />;

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

  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-2xl w-full flex shadow-xl rounded-[20px] overflow-hidden">
          {/* LEFT SIDE: Contact Form */}
          <div
            className="w-[1111px] h-[544px] bg-[rgba(255,255,255,1)] p-10 flex flex-col"
            style={{
              borderRadius: "10px",
              top: "216px",
              left: "112px",
              position: "absolute",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h2 className="text-2xl font-Mochiy Pop P One" style={{ color: "rgba(4, 42, 75, 1)" }}>
              Send us a message
            </h2>
            <p className="mb-10 mt-3 max-w-[650px] size-15" style={{ color: "rgba(153, 153, 153, 1)" }}>
              Do you have a question? A complaint? Or need any help to choose the right product from Zalomi. Feel free to contact us
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: First/Last Name */}
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

              {/* Row 2: Email / Contact */}
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
                  <label htmlFor="phoneNumber" className="text-xs font-normal text-gray-800 block mb-2">
                    Contact Details
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-[8px] overflow-hidden w-[280px]">
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
                      <div className="h-10 w-px bg-gray-300 ml-1"></div>
                    </div>

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
                <label htmlFor="message" className="text-xs font-normal text-gray-700 block mb-2 ml-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-[700px] ml-2 px-3 py-2 border border-gray-300 rounded-[8px] focus:ring-blue-500 focus:border-blue-500 text-xs resize-none"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              <div className="flex">
                <Button
                  type="submit"
                  className="bg-[rgba(4,42,75,1)] hover:bg-[#043d67] text-white font-medium rounded transition-colors text-xs ml-auto mr-[30%]"
                  style={{
                    width: "161px",
                    height: "34px",
                    borderRadius: "20px",
                  }}
                >
                  Send a message
                </Button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE: Contact Details */}
          <div
            className="w-[396px] h-[598px] bg-[rgba(4,42,75,1)] text-white p-10 flex flex-col justify-between"
            style={{
              borderRadius: "40px",
              top: "186px",
              left: "932px",
              position: "absolute",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="w-[257px] h-[58px] top-[61px] left-[38px] absolute">
              <h2 className="text-[20px] font-Mochiy Pop P One mb-8">
                Hi! we are Always here to help you
              </h2>
            </div>

            <div>
              <div className="w-[320px] h-[75px] top-[159px] left-[38px] absolute">
                <div className="bg-[rgba(58,93,121,1)] rounded p-4 flex items-start space-x-3" style={{ borderRadius: "4px" }}>
                  <IconPhone />
                  <div>
                    <h3 className="text-xs text-white mb-0.5">Helpline</h3>
                    <p className="text-gray-300 text-xs">+91 9874563210</p>
                  </div>
                </div>

                <div className="bg-[rgba(58,93,121,1)] rounded p-4 flex items-start space-x-3 mt-4" style={{ borderRadius: "4px" }}>
                  <IconMail />
                  <div>
                    <h3 className="text-xs font-normal text-white mb-0.5">Email</h3>
                    <p className="text-gray-300 text-xs">azhizensolutions@azhzen.com</p>
                  </div>
                </div>

                <div className="bg-[rgba(58,93,121,1)] rounded p-4 flex items-start space-x-3 mt-4" style={{ borderRadius: "4px" }}>
                  <IconSms />
                  <div>
                    <h3 className="text-xs font-normal text-white mb-0.5">SMS/ What's app</h3>
                    <p className="text-gray-300 text-xs">+91 9874563210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[320px] h-[3px] bg-[rgba(58,93,121,1)] absolute top-[450px] left-[38px]"></div>

            {/* ✅ Updated Social Media Section with image icons */}
            <div className="mt-4 w-[296px] h-[28px] top-[470px] left-[48px] absolute">
              <h3 className="text-base text-white mb-3 font-normal">Follow us!</h3>
              <div className="flex justify-between items-center">
                <a href="#" className="hover:opacity-80 transition ">
                  <img src="/facebook.png" alt="Facebook" className="w-[28px] h-[28px]" style={{ filter: 'brightness(0) invert(1)' }} />
                </a>
                <a href="#" className="hover:opacity-80 transition">
                  <img src="/instagram.png" alt="Instagram" className="w-[28px] h-[28px]" style={{ filter: 'brightness(0) invert(1)' }} />
                </a>
                <a href="#" className="hover:opacity-80 transition">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-[28px] h-[28px]" style={{ filter: 'brightness(0) invert(1)' }} />
                </a>
                <a href="#" className="hover:opacity-80 transition">
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-[28px] h-[28px]" style={{ filter: 'brightness(0) invert(1)' }} />
                </a>
                <a href="#" className="hover:opacity-80 transition">
                  <img src="/x.png" alt="X" className="w-[24px] h-[24px]" style={{ filter: 'brightness(0) invert(1)' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
