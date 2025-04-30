import { useState } from "react";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import blackLogo from "../assets/images/anizoLogo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-6 py-3 bg-white shadow-sm relative">
        <div className="flex items-center">
          <img src={blackLogo} alt="logo" className="w-14 h-14" />
        </div>

        <ul className="hidden md:flex gap-6 text-sm text-gray-700">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Signature Collections</a>
          </li>
          <li>
            <a href="#">Inspired Collections</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FiSearch className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
          <FiShoppingBag className="cursor-pointer" />

          <div className="md:hidden">
            {menuOpen ? (
              <FiX
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FiMenu
                className="cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden">
            <div className="flex flex-col h-full px-6 py-8">
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl text-gray-700 hover:text-black transition duration-200"
                >
                  <FiX />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg font-medium text-gray-800">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-all duration-300"
                  >
                    Signature Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-all duration-300"
                  >
                    Inspired Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-all duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-yellow-400 text-white text-xs font-medium py-2 px-3 rotate-90 origin-bottom-right shadow-md">
        ★ Reviews
      </div>
    </>
  );
};

export default Navbar;

// import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi';
// import blackLogo from "../assets/images/anizoLogo.svg";

// const Navbar = () => {
//   return (
//     <>
//       {/* Navbar */}
//       <nav className="flex justify-around items-center px-6 py-2 bg-white shadow-sm">
//         {/* Left - Logo */}
//         <div className="flex items-center justify-start">
//           <img src={blackLogo} alt="logo" className="w-16 h-16" />
//         </div>

//         {/* Center - Navigation Links */}
//         <div className="flex items-center justify-center gap-6">
//           <ul className="flex gap-5 text-sm text-gray-700">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Signature Collections</a></li>
//             <li><a href="#">Inspired Collections</a></li>
//             <li><a href="#">About us</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>

//         {/* Right - Icons */}
//         <div className="flex items-center justify-end gap-4 text-xl text-gray-700">
//           <FiSearch className="cursor-pointer" />
//           <FiUser className="cursor-pointer" />
//           <FiShoppingBag className="cursor-pointer" />
//         </div>
//       </nav>

//       {/* Vertical Reviews Tab */}
//       <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-yellow-400 text-white text-xs font-medium py-2 px-3 rotate-90 origin-bottom-right shadow-md">
//         ★ Reviews
//       </div>
//     </>
//   );
// };

// export default Navbar;
