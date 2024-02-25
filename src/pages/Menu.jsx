import React, { useState, useEffect } from "react";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import BackNav from "../components/BackNav";

import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const Menu = () => {
  const menu = useLoaderData();

  const [currentPage, setCurrentPage] = useState(1);

  const totalPizzas = menu.length;
  const pizzasPerPage = 6;
  const pages = Math.ceil(totalPizzas / pizzasPerPage);

  const start = pizzasPerPage * (currentPage - 1);
  const end = pizzasPerPage * currentPage;
  const pizzasMenu = menu.slice(start, end);

  const pageButtons = Array.from({ length: pages });

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, pages);
    setCurrentPage(nextPage);
  };

  const goToPage = (no) => {
    setCurrentPage(no);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="w-[90%] mx-auto mt-44 sm:mt-20">
      <BackNav title="Menu" />
      <ul className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-6 xl:gap-y-8">
        {menu.slice(start, end).map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>

      <div className=" w-full flex items-center justify-center gap-x-4 my-10">
        <div
          className="w-10 h-10 border-[1.5px] border-gray-300 rounded-full flex items-center justify-center cursor-pointer text-gray-500 font-semibold hover:bg-brightBlue hover:border-brightBlue hover:text-white hover:bg-green-300 duration-300 ease-in-out"
          onClick={goToPrev}
        >
          <FaLessThan />
        </div>
        <div className="flex items-center gap-x-2">
          {pageButtons.map((_, index) => {
            return (
              <div
                className={`${
                  currentPage === index + 1
                    ? "bg-green-500 border-brightBlue text-white"
                    : "border-gray-300 bg-transparent text-gray-500 hover:bg-green-300 hover:text-white"
                } w-10 h-10 border-[1.5px] rounded-full flex items-center justify-center cursor-pointer font-semibold hover:bg-brightBlue hover:border-brightBlue hover:text-white duration-300 ease-in-out`}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        <div
          className="w-10 h-10 border-[1.5px] border-gray-300 rounded-full flex items-center justify-center cursor-pointer text-gray-500 font-semibold hover:bg-brightBlue hover:border-brightBlue hover:text-white hover:bg-green-300 duration-300 ease-in-out"
          onClick={goToNext}
        >
          <FaGreaterThan />
        </div>
      </div>
    </div>
  );
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
