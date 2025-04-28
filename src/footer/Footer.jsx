import React from "react";

const Footer = () => {
  return (
    <footer
      className="min-h-[150px] text-white text-left py-8 px-4 relative flex items-center justify-start"
      style={{
        backgroundColor: "#1a1a1a", // Solid black background to match the dark theme
      }}
    >
      {/* Dark overlay for consistent look */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content of Footer */}
      <div className="relative z-10 flex flex-col ml-4">
        {/* Footer heading with matching color */}
        <p className="text-lg md:text-2xl font-semibold mb-4 text-yellow-400 animate-pulse">
          Stay Tuned for Updates
        </p>

        {/* Social Media Icons with gray color */}
        <div className="flex gap-8 mb-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-gray-500 transition duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-gray-500 transition duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-gray-500 transition duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright with matching color */}
        <p className="text-sm text-yellow-300">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
