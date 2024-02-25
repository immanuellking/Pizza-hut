import React from "react";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { useSelector } from "react-redux";
import BackNav from "../components/BackNav";

const Menu = () => {
  const menu = useLoaderData();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="w-[90%] mx-auto mt-44 sm:mt-20">
      <BackNav title="Menu" />
      <ul className="my-8 sm:my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-6 xl:gap-y-8">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
