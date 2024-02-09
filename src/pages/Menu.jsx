import React from "react";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { useSelector } from "react-redux";

const Menu = () => {
  const menu = useLoaderData();
  const cart = useSelector((state) => state.cart)
  console.log("CAAAAAAAAAAAAAAARRRRRRRRRTTTT",cart)
  return <ul className="w-[90%] mx-auto my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
    ))}
  </ul>;
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
