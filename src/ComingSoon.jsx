import React from "react";
import anizoWhiteLogo from "../src/assets/images/anizoWhiteLogo.svg";
import anizoBg from "../src/assets/images/anizoBg.jpg";

const ComingSoon = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${anizoBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Logo with shake, pulse, and bounce effects */}
      <img
        src={anizoWhiteLogo}
        alt="Logo"
        className="w-28 h-28 mb-6 animate-bounce animate-pulse animate-shake drop-shadow-2xl"
      />

      {/* Title with responsive font size */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400 font-bold mb-4 drop-shadow-lg">
        Launching Soon....
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-2xl mb-8 text-center max-w-xl text-yellow-300">
        Feel the moment with
      </p>
    </div>
  );
};

export default ComingSoon;




// import React from 'react';
// import anizoLogo from "../src/assets/images/anizoLogo.svg"
// const ComingSoon = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white px-4">

//       {/* Logo */}
//       <img
//         src={anizoLogo}
//         alt="Logo"
//         className="w-28 h-28 mb-6 animate-bounce"
//       />

//       {/* Title */}
//       <h1 className="text-5xl md:text-6xl text-red font-bold mb-4 drop-shadow-lg">
//         Coming Soon
//       </h1>

//       {/* Subtext */}
//       <p className="text-lg md:text-2xl mb-8 text-center max-w-xl">
//         We are working hard to launch our new product. Stay tuned for something amazing!
//       </p>

//       {/* Email Notify (optional) */}
//       <div className="flex flex-col md:flex-row items-center gap-4">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="px-4 py-2 rounded-md text-gray-800 focus:outline-none w-64"
//         />
//         <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-semibold hover:bg-purple-200 transition">
//           Notify Me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ComingSoon;
