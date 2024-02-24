import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchOrder from "./SearchOrder";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <header className="w-full shadow-md flex items-center fixed top-0 left-0 right-0 bg-white" style={{zIndex: 4000}}>
      <div className="w-[90%] my-5 mx-auto flex flex-col items-start lg:flex-row lg:items-center justify-start lg:justify-between gap-y-8 lg:gap-y-0 relative">
        <div
          className="text-lg hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Pizza-<span className="text-[#FFCB00] text-2xl font-bold">HUT</span>
        </div>

        <SearchOrder />

        <div className="flex items-center h-0 justify-center hover:cursor-pointer absolute top-5 right-0  lg:static">
          <div className="relative" onClick={() => navigate("/cart")}>
            <LuShoppingCart size={27} />
            {cart.length ? (
              <div className="h-5 w-5 bg-red-500 text-white text-[10px] flex justify-center items-center rounded-full absolute -top-2 -right-1 ">
                {cart.length}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
