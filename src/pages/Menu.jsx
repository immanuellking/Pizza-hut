import React from "react";
import { getMenu } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

const Menu = () => {
  const data = useLoaderData();
  console.log(data)
  return <div className="">Menu</div>;
};

export async function loader() {
  const data = await getMenu();
  return data;
}

export default Menu;
