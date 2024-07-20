"use client";

import Image from "next/image";
import Table from "./Table";

const Section2 = () => {
  return (
    <div className="relative">
      <Image
        src="/Section2/printing.jpg"
        alt="Banner"
        width={900}
        height={850}
        className="absolute inset-0 w-full h-full object-cover filter brightness-75 z-0"
      />
      <div className="relative z-10 px-[200px]  ">
        <h1 className="text-white text-new font-bold pt-16 pb-5 text-center">
          FIND THE RIGHT CARTRIDGES KING FOR YOUR PRINTER
        </h1>

        <div className="">
        <Table />
        </div>
        
      </div>
    </div>
  );
};

export default Section2;
