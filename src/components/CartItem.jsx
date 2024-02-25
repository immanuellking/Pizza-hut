import React from "react";
import UpdateItemCart from "./UpdateItemCart";
import Button from "./Button";
import { formatCurrency } from "../utils/formatters";
import { bindActionCreators } from "redux";
import { cartActionCreators } from "../redux/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ item, calcTotal }) => {
  const { pizzaId, name, quantity, totalPrice, imageUrl, ingredients } = item;

  const dispatch = useDispatch();

  const { increaseItemQuantity, decreaseItemQuantity, deleteItemFromCart } =
    bindActionCreators(cartActionCreators, dispatch);

  const increaseAmount = () => {
    increaseItemQuantity(pizzaId);
    calcTotal();
  };

  const decreaseAmount = () => {
    decreaseItemQuantity(pizzaId);
    calcTotal();
  };

  const deleteItem = () => {
    deleteItemFromCart(pizzaId);
    calcTotal();
  };

  return (
    <li className="w-full flex border-b-[1px] border-gray-200 pb-4 gap-x-4">
      <div className="h-28 w-36 rounded-md overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full" />
      </div>
      <div className="w-full flex flex-col justify-between">
        <div>
          <p className="font-semibold text-xl">{name}</p>
          <div className="italic text-sm text-gray-400 flex gap-x-1">
            <p>{ingredients.join(", ")}</p> 
          </div>
        </div>

        <div className="w-full flex justify-between items-end">
          <div className="font-semibold text-lg">
            {formatCurrency(totalPrice)}
          </div>
          <div className="flex items-center gap-x-4">
            <UpdateItemCart
              value={quantity}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
            />
            <div className="hidden sm:flex">
              <Button type={"primary"} onClick={deleteItem}>
                Delete
              </Button>
            </div>
            <div className="flex sm:hidden">
              <Button type={"primary"} onClick={deleteItem}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5.66669 3.31337L5.81335 2.44004C5.92002 1.80671 6.00002 1.33337 7.12669 1.33337H8.87335C10 1.33337 10.0867 1.83337 10.1867 2.44671L10.3334 3.31337"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.5667 6.09338L12.1334 12.8067C12.06 13.8534 12 14.6667 10.14 14.6667H5.86002C4.00002 14.6667 3.94002 13.8534 3.86668 12.8067L3.43335 6.09338"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.88666 11H9.10666"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.33331 8.33337H9.66665"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
