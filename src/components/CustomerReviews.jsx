import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import demoimg from "../../src/assets/images/demoPerfume.png";

const reviews = [
  { rating: 4, title: "great", name: "Barjees Haris", message: "" },
  { rating: 5, title: "Nice one", name: "Maharoof Kv" },
  { rating: 5, title: "Good", name: "PRASAN KUMAR" },
  { rating: 4, title: "great", name: "Barjees Haris", message: "" },
  { rating: 5, title: "Nice one", name: "Maharoof Kv" },
  { rating: 5, title: "Good", name: "PRASAN KUMAR" },
];

const StarRating = ({ count }) => (
  <div className="text-teal-700 text-xl">
    {"★".repeat(count)}
    {"☆".repeat(5 - count)}
  </div>
);

const CustomerReviews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="px-8 py-10 text-center ">
      <h2 className="text-xl font-semibold mb-2">
        Let our customers speak for us
      </h2>
      <div className="text-teal-700">
        <StarRating count={4} />
        <p className="text-sm text-gray-600">from all reviews</p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mt-10"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white p-4 mx-4">
              <StarRating count={review.rating} />
              <p className="mt-2 font-semibold">{review.title}</p>
              <p className="text-sm text-gray-500">{review.message}</p>
              <p className="mt-4 text-xs text-gray-700">{review.name}</p>
              <img
                src={demoimg}
                alt="customer"
                className="mx-auto mt-4 w-28 h-28 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-6">
        <button
          ref={prevRef}
          className="text-4xl text-teal-700 hover:text-red-900"
        >
          {"<"}
        </button>
        <button
          ref={nextRef}
          className="text-4xl text-teal-700 hover:text-red-900"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { Autoplay, Navigation } from "swiper/modules";
// import demoimg from "../../src/assets/images/demoPerfume.png";

// const reviews = [
//   {
//     rating: 5,
//     title: "great",
//     name: "Barjees Haris",
//     message: "",
//   },
//   {
//     rating: 5,
//     title: "Nice one",
//     // message: "Super fragrance",
//     name: "Maharoof Kv",
//   },
//   {
//     rating: 5,
//     title: "Good",
//     // message: "Good",
//     name: "PRASAN KUMAR",
//   },
//   {
//     rating: 5,
//     title: "great",
//     name: "Barjees Haris",
//     message: "",
//   },
//   {
//     rating: 5,
//     title: "Nice one",
//     // message: "Super fragrance",
//     name: "Maharoof Kv",
//   },
//   {
//     rating: 5,
//     title: "Good",
//     // message: "Good",
//     name: "PRASAN KUMAR",
//   }
// ];

// const StarRating = ({ count }) => (
//   <div className="text-teal-700 text-xl">
//     {"★".repeat(count)}{"☆".repeat(5 - count)}
//   </div>
// );

// const CustomerReviews = () => {
//   return (
//     <div className="px-8 py-10 text-center">
//       <h2 className="text-xl font-semibold mb-2">Let our customers speak for us</h2>
//       <div className="text-teal-700">
//         <StarRating count={4} />
//         <p className="text-sm text-gray-600">from all reviews </p>
//       </div>

//       <Swiper
//         modules={[Autoplay, Navigation]}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         navigation
//         className="mt-10"
//       >
//         {reviews.map((review, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="bg-white p-4 mx-4">
//               <StarRating count={review.rating} />
//               <p className="mt-2 font-semibold">{review.title}</p>
//               <p className="text-sm text-gray-500">{review.message}</p>
//               <p className="mt-4 text-xs text-gray-700">{review.name}</p>
//               <img src={demoimg} alt="customer" className="mx-auto mt-4 w-28 h-28  object-cover" />
//               </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CustomerReviews;
