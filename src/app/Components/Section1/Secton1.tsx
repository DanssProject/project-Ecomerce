"use client";

import Image from "next/image";

const Section1 = () => {
  return (
    <div>
      <div className=" flex justify-between px-[210px] pt-14 ">
        <div className=" flex items-center ">
          <Image src="/Logo/Group 2.svg" width={40} height={40} alt="Logo" />
          <h1 className="px-3 font-bold text-black/78 text-5xl">
            CARTRIDGE KINGS
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-black px-4 py-2">
            <input
              type="text"
              placeholder="Search "
              className=" outline-none flex-grow bg-transparent"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M23 23l-5.35-5.35M17.65 17.65A7.5 7.5 0 1112 4.5a7.5 7.5 0 015.65 13.15"
                />
              </svg>
            </button>
          </div>
          <button className="bg-orange-500 text-white px-10 py-2 custom-shadow font-medium ">
            CART ( 1 )
          </button>
        </div>
      </div>

      <div className="px-[210px] w-auto py-8">
        <div className="bg-blue-500">
          <div className="flex text-xl w-full">
            <a
              href="#home"
              className="flex justify-center items-center text-white py-2 w-full rounded hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="flex justify-center items-center text-white py-2 w-full rounded hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="flex justify-center items-center text-white py-2 w-full rounded hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="flex justify-center items-center text-white py-2 w-full rounded hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
