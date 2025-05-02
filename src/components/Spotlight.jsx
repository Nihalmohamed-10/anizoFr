import React from "react";
import Slider from "react-slick";
import anizo1 from "../assets/images/anizo1.jpg";
import anizoBg from "../assets/images/anizoBg.jpg";
import anizo2 from "../assets/images/anizo2.jpg";
import anizo3 from "../assets/images/anizo3.jpg";
import anizo4 from "../assets/images/anizo4.jpg";
import "../../src/index.css";
const Spotlight = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const images = [anizo1, anizoBg, anizo2, anizo3, anizo4];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute z-10 w-full px-4 md:px-0 md:w-[529px] bottom-32 md:bottom-[120px] right-1/2 md:right-[490px] transform md:translate-x-0 translate-x-1/2">
        <div className="">
          <p className="text-center text-white text-2xl sm:text-4xl md:text-4xl font-bold typing-loop">
            We Are Launching Soon...
          </p>
        </div>
      </div>
      {/* <div className="absolute z-10 w-full px-4 md:px-0 md:w-[529px] bottom-20 md:bottom-[91px] right-1/2 md:right-[490px] transform md:translate-x-0 translate-x-1/2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="w-full md:w-[200px] text-white border border-white px-4 py-2">
            Signature
          </button>
          <button className="w-full md:w-[200px] text-white border border-white px-4 py-2">
            Click Me
          </button>
        </div>

        <div className="mt-6">
          <p className="text-center text-white text-xl sm:text-2xl md:text-3xl font-light">
            Browse from our signature collection
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Spotlight;

// import React from "react";
// import anizo1 from "../assets/images/anizo1.jpg";

// function Spotlight() {
//   return (
//     <div className="relative">

//       <img className="h-screen object-cover w-full" src={anizo1} alt="Spotlight" />

//       <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[529px]">

//         <div className="flex justify-evenly space-x-4">
//           <button className="w-[200px] text-white border border-white px-4 py-2 hover:bg-white hover:text-gray-800 transition-all duration-300">
//             Signature
//           </button>
//           <button className="w-[200px] text-white border border-white px-4 py-2 hover:bg-white hover:text-gray-800 transition-all duration-300">
//             Inspired
//           </button>
//         </div>

//         <div className="mt-10">
//           <p className="text-3xl text-center font-normal text-white">
//             Browse from our signature collection
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Spotlight;

// import React from "react";
// import anizo1 from "../assets/images/anizo1.jpg";

// function Spotlight() {
//   return (
//     <div className="relative">
//       <div>
//         <img className="h-170 object-cover w-full" src={anizo1} alt="" />
//       </div>
//       <div className="absolute bottom-[91px] right-[490px] w-[529px]">
//         <div className="flex justify-evenly">
//           <div>
//             <button className="w-[200px] text-white border border-white  px-4 py-2">Signature</button>
//           </div>
//           <div>
//           <button className="w-[200px] text-white border border-white  px-4 py-2">Click Me</button>
//           </div>
//         </div>
//         <div className="mt-10">
//          <p className="text-3xl text-center font-400 text-white"> Browse from our signature collection</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Spotlight;
