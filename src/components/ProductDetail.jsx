import React, { useState } from 'react';
import item from "../assets/images/item.jpg";
import modal from "../assets/images/modal-opener.jpg";
import wtsp from "../assets/images/WhatsAppImage2.jpg";

const ProductDetail = () => {
  const [activeSize, setActiveSize] = useState('10ml');
  const [quantity, setQuantity] = useState(1);
  const sizes = ['10ml', '50ml', '100ml'];

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 flex flex-col xl:flex-row gap-10">
      
      <div className="w-full xl:w-[712px] space-y-4 xl:sticky top-6 self-start">
        <img src={item} alt="Main product" className="rounded w-[551px] mx-auto" />
        <div className="grid grid-cols-2 gap-2 mx-auto">
          <img src={modal} alt="Thumb 1" className="mx-auto rounded" />
          <img src={wtsp} alt="Thumb 2" className="mx-auto rounded" />
        </div>
      </div>

      <div className="w-full xl:w-[345px]">
        <h2 className="text-2xl font-semibold mb-2">Imperial valley</h2>
        <p className="text-lg font-bold mb-4">Rs. 800.00</p>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <div className="flex flex-col gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-4 py-2 border rounded w-[50%] ${
                  activeSize === size
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <div className="flex items-center gap-2">
            <button
              onClick={decrement}
              className="px-3 py-1 border rounded text-xl font-bold"
            >
              -
            </button>
            <span className="w-10 text-center border py-1 rounded">{quantity}</span>
            <button
              onClick={increment}
              className="px-3 py-1 border rounded text-xl font-bold"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <button className="w-[50%] xl:w-full bg-black text-white px-6 py-2 rounded">
            Add to cart
          </button>
          <button className="w-[50%] xl:w-full border px-6 py-2 rounded">Buy it now</button>
        </div>

        <div className="text-sm/9 text-gray-700 space-y-4">
          <p>
            <strong>Fumes' Imperial Valley</strong> is a sophisticated and luxurious fragrance that captures the essence of luxury and nature in a single bottle. This carefully crafted blend of rare, rich Sicilian Bergamot and blackcurrant brings a powerful and unique character to life, ideal for those who seek a scent as captivating and enduring as they are.
          </p>
          <p>
            At the top, Imperial Valley lets the vibrant Sicilian Bergamot and fresh-cut pink pepper shine through, sparking instant intrigue. Its opening notes pack a punch — both zesty and exotic. The result is an immediate aroma of clean citrus, green freshness, and cloud-piercing brightness that reveals the soul of elegance.
          </p>
          <p>
            As the fragrance deepens, the heart reveals the rich, smoky intensity of oud, blended with luxurious Egyptian jasmine and rare white amber. This intense middle is both familiar and forward-thinking, creating a balanced strength and sensuality.
          </p>
          <p>
            In its final embrace, Imperial Valley settles into the sultriness of musk and Haitian vetiver, earthy notes that linger for hours. This long-lasting composition is refined and purposeful — designed to make a lasting impression yet so unforgettable that you’ll long for its return.
          </p>
          <p>
            Imperial Valley is for fragrance lovers who demand sophistication, delivering a memorable yet long-lasting identity powerful enough to be your everyday essential or the finishing spark to an event and idea worth only selection. Leaving it impossible to overlook.
          </p>

          <div className="pt-4">
            <h4 className="font-semibold">Fragrance Notes:</h4>
            <ul className="list-disc list-inside">
              <li><strong>Top:</strong> Sicilian Bergamot, Pink Pepper, Davana</li>
              <li><strong>Heart:</strong> Aged Oud, White Amber, Egyptian Jasmine</li>
              <li><strong>Base:</strong> Cashmere, Musk, Haitian Vetiver</li>
            </ul>
          </div>

          <div className="pt-4">
            <h4 className="font-semibold">Size:</h4>
            <div className="flex items-center gap-1">
              <span className="text-green-600">★★★★★</span>
              <span>3 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;



