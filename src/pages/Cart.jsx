import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { cartActionCreators } from "../redux/cart";
import { bindActionCreators } from "redux";
import { formatCurrency } from "../utils/formatters";
import Button from "../components/Button";
import BackNav from "../components/BackNav";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalCartPrice = useSelector((state) => state.totalCartPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getCartTotalPrice } = bindActionCreators(
    cartActionCreators,
    dispatch
  );

  const calcTotal = () => {
    getCartTotalPrice();
  };

  useEffect(() => {
    calcTotal();
  }, []);

  console.log("Total Price!!!", totalCartPrice);
  return (
    <div className="w-[70%] mx-auto my-10">
      <BackNav title="My Order" />

      <main className="w-full">
        <ul className="w-full space-y-8">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} calcTotal={calcTotal} />
          ))}
        </ul>

        <div className="w-full mt-10 flex justify-between">
          <div className="flex gap-x-1">
            <h3 className="font-semibold">Subtotal</h3>
            <p className="text-gray-400">
              ({cart.length} meal{cart.length > 1 ? "s" : ""})
            </p>
          </div>
          <div className="text-xl font-bold">
            {formatCurrency(totalCartPrice)}
          </div>
        </div>

        <div className="w-full flex justify-center mt-5">
          <Button type="secondary">Proceed To Checkout</Button>
        </div>
      </main>
    </div>
  );
};

export default Cart;