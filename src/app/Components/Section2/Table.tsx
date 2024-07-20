import { useState } from "react";

const Table = () => {
  const [activeTab, setActiveTab] = useState("3-Step Easy Search");

  return (
    <div className=" pb-11">
        <div className="bg-white shadow-black shadow-md">
      <div className="  flex  h-full w-full 10 justify-center">
        <button
          onClick={() => setActiveTab("3-Step Easy Search")}
           className={` w-full relative ${
            activeTab === "3-Step Easy Search"
            ? "active-tab-background  text-white"
              : "bg-white border h-[63px] text-black"
          }`}
        >
          3-Step Easy Search®
        </button>
        <button
          onClick={() => setActiveTab("Search By Serial Number")}
          className={` w-full relative ${
            activeTab === "Search By Serial Number"
              ? " pt-14 active-tab-background text-white"
              : "bg-white border h-[63px] text-black"
          }`}
        >
          Search By Serial Number
        </button>
      </div>
      <div className="px-3 py-4 relative z-0">
        {activeTab === "3-Step Easy Search" && (
          <div className="space-y-4">
            <div className="flex space-x-4">
              <select className="py-2 px-4 border rounded w-full">
                <option>Printer Brand</option>
                {/* Add more options here */}
              </select>
              <select className="py-2 px-4 border rounded w-full">
                <option>Printer Series</option>
                {/* Add more options here */}
              </select>
              <select className="py-2 px-4 border rounded w-full">
                <option>Printer Model</option>
                {/* Add more options here */}
              </select>
              <button className=" flex py-2 px-20 bg-orange-500 text-white custom-shadow font-medium ">
                <a className=" flex w-full">
                FIND CARTRIDGES
                </a>
              </button>
            </div>
          </div>
        )}
        {activeTab === "Search By Serial Number" && (
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Enter Serial Number"
              className="py-2 px-4 border rounded w-full"
            />
            <button className="py-2 px-20 bg-orange-500 text-white custom-shadow font-medium ">
              Search
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Table;
