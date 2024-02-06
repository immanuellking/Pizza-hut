import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-4/5 mx-auto flex justify-between">
        <div className="">Pizza-Hut</div>

        <form>
          <input type="search" name="" id="" />
        </form>

        <div>
          <LuShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
