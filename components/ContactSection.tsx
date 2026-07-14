"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setShowSuccess(true);
    }
  };

  const handleCloseSuccess = () => {
    setName("");
    setEmail("");
    setMessage("");
    setShowSuccess(false);
  };

  return (
    <div className="w-full h-full bg-[#c0c0c0] text-black font-sans text-xs flex flex-col p-4 overflow-auto relative">
      
      {/* Description */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-800">Connection Wizard</h3>
        <p className="text-gray-600 mt-1">Send a message to establish an active link with Rachana&apos;s terminal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6 flex-1">
        
        {/* Left Side: Interactive Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label className="font-bold text-gray-700">Your Name:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white border border-[#808080] win95-sunken px-2 py-1.5 focus:outline-none text-black font-mono"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-bold text-gray-700">Your Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border border-[#808080] win95-sunken px-2 py-1.5 focus:outline-none text-black font-mono"
            />
          </div>

          <div className="flex-1 flex flex-col space-y-1 min-h-[120px]">
            <label className="font-bold text-gray-700">Message:</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-white border border-[#808080] win95-sunken p-2.5 focus:outline-none text-black font-mono resize-none text-[11px]"
            />
          </div>

          <button
            type="submit"
            className="win95-button w-full sm:w-28 py-1.5 font-bold cursor-pointer shrink-0 self-start"
          >
            Send Message
          </button>
        </form>

        {/* Right Side: Quick Links & Info */}
        <div className="flex flex-col justify-between p-4 border-2 border-white border-b-[#808080] border-r-[#808080] bg-[#c0c0c0] shadow-[inset_1px_1px_0_#808080]">
          <div className="space-y-4">
            <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-700">Terminal Address</h4>
            
            <div className="space-y-2 font-mono text-[11px]">
              <div>
                <span className="font-sans font-bold text-gray-500">Email: </span>
                <a href="mailto:adhikaryrachana00428@gmail.com" className="text-blue-900 underline hover:text-blue-700">
                  adhikaryrachana00428@gmail.com
                </a>
              </div>
              <div>
                <span className="font-sans font-bold text-gray-500">Phone: </span>
                <a href="tel:+916295248578" className="text-blue-900 underline hover:text-blue-700">
                  +91 6295248578
                </a>
              </div>
            </div>

            <div className="border-t border-[#808080] my-2" />

            <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-700">Remote Links</h4>
            <div className="flex space-x-2">
              <a
                href="https://github.com/rachanaadhikary"
                target="_blank"
                rel="noopener noreferrer"
                className="win95-button px-3 py-1 font-bold flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/rachanaadhikary"
                target="_blank"
                rel="noopener noreferrer"
                className="win95-button px-3 py-1 font-bold flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="text-[10px] text-gray-500 font-mono mt-6">
            Rachana Adhikary<br />
            2026 · Bengaluru, India
          </div>
        </div>

      </div>

      {/* Success Dialog Modal popup */}
      {showSuccess && (
        <div className="absolute inset-0 bg-black/35 z-50 flex items-center justify-center p-4">
          <div className="w-64 bg-[#c0c0c0] win95-raised p-1 flex flex-col">
            {/* Modal Title bar */}
            <div className="h-5 bg-gradient-to-r from-[#000080] to-[#1084d0] text-white flex items-center justify-between px-1.5 font-bold text-[11px]">
              <span>Information</span>
              <button 
                onClick={handleCloseSuccess}
                className="w-3.5 h-3.5 bg-[#c0c0c0] win95-raised text-black font-sans font-bold text-[9px] flex items-center justify-center active:shadow-[inset_1px_1px_0_#000]"
              >
                ✕
              </button>
            </div>
            
            {/* Modal content */}
            <div className="p-4 flex items-start space-x-3">
              <span className="text-2xl select-none shrink-0">ℹ</span>
              <div className="font-sans text-[11px] leading-snug">
                Connection established!<br />Your message has been sent successfully.
              </div>
            </div>

            {/* Modal Footer OK button */}
            <div className="flex justify-center pb-2 select-none">
              <button
                onClick={handleCloseSuccess}
                className="win95-button px-6 py-1 min-w-[60px] font-bold cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
