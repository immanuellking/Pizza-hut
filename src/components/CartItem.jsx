import React from "react";
import UpdateItemCart from "./UpdateItemCart";
import Button from "./Button";
import { formatCurrency } from "../utils/formatters";

const CartItem = ({ item }) => {
  const { name, quantity, totalPrice, imageUrl, ingredients } = item;
  console.log("ingredients cart item", ingredients);
  return (
    <li className="flex justify-between border-b-[1px] border-gray-200 pb-4">
      <div className="flex gap-x-4">
        <div className="h-28 w-36 rounded-md overflow-hidden">
          <img src={imageUrl} alt={name} className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-semibold text-xl">{name}</p>
            <div className="italic text-sm text-gray-400 flex gap-x-1">
              {ingredients.map((ingredient) => (
                <p>{ingredient}</p>
              ))}
            </div>
          </div>

          <div className="font-semibold text-lg">
            {formatCurrency(totalPrice)}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <UpdateItemCart value={quantity} />
        <div>
          <Button type={"primary"}>Delete</Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
