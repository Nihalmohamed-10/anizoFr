import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-xs text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex flex-col">
            <p className="mb-2 text-sm text-gray-900">
              Subscribe to our emails
            </p>
            <form className="flex border border-gray-400 w-72">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 w-full text-sm text-gray-800 outline-none"
              />
              <button
                type="submit"
                className="px-3 flex items-center justify-center text-gray-700"
              >
                <FiArrowRight size={16} />
              </button>
            </form>
          </div>

          <div className="mb-5 text-gray-900 text-2xl mt-8">
            <a href="#" className="hover:text-gray-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mb-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
          <div className="flex flex-wrap items-center gap-3 text-gray-500">
            <p className="text-gray-700">© 2025, fumme</p>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              Refund policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              Privacy policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              Terms of service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              Shipping policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-800">
              Contact information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";

// function Footer() {
//   return (
//     <div>
//       <div  className="flex justify-around items-center mt-15 pb-15 border-b-4 border-teal-100">
//         <div>
//             <p className="text-md">Subscribe to our emails</p>
//             <input className="mt-5 w-100 p-2 border border-grey" type="email" placeholder="email" />
//         </div>
//         <div>
//             <img src="" alt="insta" />
//         </div>
//       </div>
//       <div className="mt-10">
//         <div className="flex">
//             <p>© 2025, fumme</p>
//             <p>Refund policy</p>
//             <p>Privacy policy</p>
//             <p>Terms of service</p>
//             <p>Shipping policy</p>
//             <p>Contact information</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
