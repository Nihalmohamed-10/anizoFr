import React from "react";
import demoimg from "../../src/assets/images/demoPerfume.png";
import {Link} from "react-router-dom"
const products = [
  { name: "Angels", price: "From Rs. 600.00" },
  { name: "Ember 23", price: "From Rs. 400.00" },
  {
    id:1,
    name: "Exotic Musk",
    price: "From Rs. 800.00",
    rating: 4,
    reviews: 7,
    label: "Sale",
  },
  { id:2, name: "Flora", price: "From Rs. 400.00" },
  {
    id:3,
    name: "Great Oud",
    price: "From Rs. 600.00",
    rating: 5,
    reviews: 1,
  },
  {
    id:4,
    name: "Imperial valley",
    price: "From Rs. 800.00",
    rating: 5,
    reviews: 3,
  },
  {id:5, name: "L Homme", price: "From Rs. 600.00" },
  {
    id:6,
    name: "Legend",
    price: "From Rs. 300.00",
    rating: 4,
    reviews: 1,
  },
];

// const StarRating = ({ count }) => (
//   <div className="flex text-sm text-black-500">
//     {"★".repeat(count)}{"☆".repeat(5 - count)}
//   </div>
// );

function SignatureCollection() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <h2 className="text-xl font-semibold mb-6">Signature Collections</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-10 text-center">
      {products.map((product, idx) => (
          <div key={idx}>
            <Link to= {`/detail`}>
              <div className="relative w-full h-48">
                <img
                  src={demoimg}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {/* Label like "Sale" */}
                {/* {product.label && (
                  <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    {product.label}
                  </span>
                )} */}
              </div>
            </Link>

            <p className=" mt-2 font-medium px-2">{product.name}</p>

            {product.rating && (
              <>
                {/* <div className="px-2">
                  <StarRating count={product.rating} />
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div> */}
              </>
            )}

            
            <p className=" text-sm px-2">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-black text-white px-6 py-2 text-sm rounded">
          View all
        </button>
      </div>
    </div>
  );
}

export default SignatureCollection;

// import React from "react";
// import demoimg from "../../src/assets/images/demoPerfume.png";

// function SignatureCollection() {
//   return (
//     <div>
//       <div>
//         <p>Signature Collections</p>
//       </div>
//       <div className="px-[180px] grid grid-cols-4 gap-x-1 gap-y-3 justify-evenly">

//         <div className="w-[210px]">
//           <img src={demoimg} alt="Perfume 1" className="w-full h-32 object-contain" />
//         </div>
//         <div className="w-[210px]">
//           <img src={demoimg} alt="Perfume 1" className="w-full h-32 object-contain" />
//         </div>
//         <div className="w-[210px]">
//           <img src={demoimg} alt="Perfume 1" className="w-full h-32 object-contain" />
//         </div>
//         <div className="w-[210px]">
//           <img src={demoimg} alt="Perfume 1" className="w-full h-32 object-contain" />
//         </div>
//         <div className="w-[210px]">
//           <img src={demoimg} alt="Perfume 1" className="w-full h-32 object-contain" />
//         </div>
//         <div className="w-[210px]">
//           <img src={demoimg} alt="Perfume 1" className="w-full h-32 object-contain" />
//         </div>
//         <div className="w-[210px]">
//           <img src={demoimg} alt="Perfume 1" className="w-full h-32 object-contain" />
//         </div>
//         <div className="w-[210px]">
//           <img src={demoimg} alt="Perfume 1" className="w-full h-32 object-contain" />
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default SignatureCollection;

