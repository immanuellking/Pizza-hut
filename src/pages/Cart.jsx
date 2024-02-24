import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { cartActionCreators } from "../redux/cart";
import { bindActionCreators } from "redux";
import { formatCurrency } from "../utils/formatters";
import Button from "../components/Button";
import BackNav from "../components/BackNav";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalCartPrice = useSelector((state) => state.totalCartPrice);
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
    <div className="w-[95%] sm:w-[90%] lg:w-[70%] mx-auto my-5 sm:my-10">
      <BackNav title={`${cart.length > 0 ? "My Order" : ""}`} />

      {cart.length > 0 ? (
        <main className="w-full">
          <ul className="w-full space-y-8">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} calcTotal={calcTotal} />
            ))}
          </ul>

          <div className="w-full mt-10 flex justify-between">
            <div className="flex gap-x-1">
              <h3 className="font-semibold text-lg">Subtotal</h3>
              <p className="text-gray-400 text-lg">
                ({cart.length} meal{cart.length > 1 ? "s" : ""})
              </p>
            </div>
            <div className="text-xl font-bold">
              {formatCurrency(totalCartPrice)}
            </div>
          </div>

          <div className="w-full flex justify-center mt-5">
            <Button type="secondary" to="/checkout">
              Proceed To Checkout
            </Button>
          </div>
        </main>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
