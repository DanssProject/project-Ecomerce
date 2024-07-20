"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/Section3/Cart.png", description1: "HP 62 Black Ink Cartridge", description2: "(HPC2P04AE)", price:"$9.49"},
  { src: "/Section3/Print.jpg", description1: "Canon MF-3110 Toner", description2: "(CP04AE)", price:"$36.45" },
  { src: "/Section3/Cart.png", description1: "HP 62 Black Ink Cartridge", description2: "(HPC2P04AE)", oldPrice: "$9.49", price: "$5.99" },
];

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-12 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">FEATURED PRODUCTS</h1>
      <div className="w-full max-w-4xl flex items-center">
        <button
          onClick={handlePrev}
          className=" border-4 border-gray-500 text-gray-500  p-4 rounded-full flex-shrink-0 hover:border-orange-500 hover:text-orange-500 mr-6"
        >
         <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 24"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M7 5l-7 7 7 7" />
    <line
      x1="3"
      y1="12"
      x2="15"
      y2="12"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
    />
  </svg>
        </button>
        <div className="overflow-hidden flex-grow mx-4">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 p-1">
                <div className="w-full bg-white">
                  <div className="px-3 py-3">
                    <div className="px-3 py-3 border border-gray-500 ">
                      <Image
                        src={image.src}
                        alt={`Product ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-36 h-36 object-cover "
                      />
                    </div>
                    <div className="pt-4 px-3">
                      <div>
                        <h1 className=" font-medium">{image.description1}</h1>
                        <p>{image.description2}</p>
                      </div>
                      <div className="pt-9 flex justify-between items-center">
                        {index === images.length - 1 && image.oldPrice ? (
                          <div className="flex flex-col items-center ">
                            <span className="text-red-500 line-through">{image.oldPrice}</span>
                            <span className="font-medium">{image.price}</span>
                          </div>
                        ) : (
                          <h1 className="font-medium">{image.price}</h1>
                        )}
                        <button className="bg-orange-500 text-white custom-shadow text-xs font-medium px-5 py-2 mt-2">ADD TO CART</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="border-4 border-gray-500 text-gray-500 p-4 rounded-full flex-shrink-0 ml-6 hover:border-orange-500 hover:text-orange-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 24"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
            <line
              x1="1"
              y1="12"
              x2="13"
              y2="12"
              stroke="currentColor"
              strokeWidth={4}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Section3;
