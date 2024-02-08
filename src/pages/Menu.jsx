import React from "react";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "../components/MenuItem";

const Menu = () => {
  const menu = useLoaderData();
  console.log(menu)
  return <ul className="w-[90%] mx-auto my-16 grid grid-cols-3 gap-12">
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
