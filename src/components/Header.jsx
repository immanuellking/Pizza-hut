import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full shadow-md flex items-center">
      <div className="w-[90%] my-5 mx-auto flex flex-col items-start lg:flex-row lg:items-center justify-start lg:justify-between gap-y-8 lg:gap-y-0 relative">
        <div className="text-lg hover:cursor-pointer">
          Pizza-<span className="text-[#FFCB00] text-2xl font-bold">HUT</span>
        </div>

        <form className="bg-[#F4F5F8] w-full lg:w-96 h-12 lg:h-10 flex items-center rounded-full">
          <div className="w-full flex items-center px-3">
            <FiSearch size={27} color="#7E8494" />
            <input
              type="search"
              placeholder="Search for meal"
              name=""
              id=""
              className="ml-3 outline-0 w-full h-4 bg-transparent placeholder:text-sm placeholder:font-light"
            />
          </div>
        </form>

        <div className="flex items-center h-0 justify-center hover:cursor-pointer absolute top-5 right-0  lg:static">
          <LuShoppingCart size={27} />
        </div>
      </div>
    </header>
  );
};

export default Header;
