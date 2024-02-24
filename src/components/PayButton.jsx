import React from "react";
import { PaystackButton } from "react-paystack";
import { createOrder } from "../services/apiRestaurant";
import { cartActionCreators } from "../redux/cart";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

const PayButton = ({
  amount,
  email,
  cart,
  customer,
  address,
  phone,
  priority,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { clearCart } = bindActionCreators(cartActionCreators, dispatch);

  const priorityPrice = priority ? Math.round(amount * 0.2) : 0;
  console.log("PPPPP", priorityPrice);

  const totalPrice = amount * 100 + priorityPrice;

  const publicKey = import.meta.env.VITE_PS_PUBLIC_KEY;
  //   const [reference, setReference] = React.useState("");

  const handlePaystackSuccessAction = (reference) => {
    // handle payment success
    createNewOrder();
  };

  const createNewOrder = async () => {
    const order = { customer, cart, address, phone, priority, totalPrice };
    const newOrder = await createOrder(order);
    console.log(newOrder);
    clearCart();
    navigate(`/order/${newOrder.id}`);
  };

  const componentProps = {
    email,
    amount: totalPrice,
    publicKey,
    text: "Checkout",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => alert("Payment canceled by user."),
  };

  return (
    <PaystackButton
      {...componentProps}
      className="rounded-full font-semibold capitalize tracking-wide transition-colors duration-300 bg-black text-white px-20 py-4 text-lg"
    />
  );
};

export default PayButton;
