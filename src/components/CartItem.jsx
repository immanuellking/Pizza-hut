import React from "react";
import UpdateItemCart from "./UpdateItemCart";
import Button from "./Button";
import { formatCurrency } from "../utils/formatters";
import { bindActionCreators } from "redux";
import { cartActionCreators } from "../redux/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { id, name, quantity, totalPrice, imageUrl, ingredients } = item;

  const dispatch = useDispatch();

  const { increaseItemQuantity, decreaseItemQuantity, deleteItemFromCart } =
    bindActionCreators(cartActionCreators, dispatch);

  const increaseAmount = () => {
    increaseItemQuantity(id);
  };

  const decreaseAmount = () => {
    decreaseItemQuantity(id);
  };

  const deleteItem = () => {
    deleteItemFromCart(id);
  };

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
        <UpdateItemCart
          value={quantity}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <div>
          <Button type={"primary"} onClick={deleteItem}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
