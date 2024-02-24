import React from "react";
import { formatCurrency } from "../utils/formatters";

const OrderItem = ({ item, ingredients, isLoadingIngredients }) => {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="w-full flex justify-between items-center border-b-[1px] border-gray-200 py-4 gap-x-4">
      <div className="">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="italic text-gray-500">
          {isLoadingIngredients ? "Loading...." : ingredients.join(", ")}
        </p>
      </div>
      <div className="flex items-center gap-x-1">
        <p className="font-bold text-lg">{formatCurrency(totalPrice)}</p>
        <p className="text-gray-600">(NGN{(totalPrice * 1700).toLocaleString()})</p>
      </div>
    </li>
  );
};

export default OrderItem;
