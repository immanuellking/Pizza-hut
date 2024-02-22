import React from "react";
import { PaystackButton } from "react-paystack";
import { createOrder } from "../services/apiRestaurant";
import { cartActionCreators } from "../redux/cart";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

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

  const { clearCart } = bindActionCreators(cartActionCreators, dispatch);

  const publicKey = import.meta.env.VITE_PS_PUBLIC_KEY;
  //   const [reference, setReference] = React.useState("");

  const handlePaystackSuccessAction = (reference) => {
    // handle payment success
    createNewOrder();
  };

  const createNewOrder = async () => {
    const order = { customer, cart, address, phone, priority };
    const newOrder = await createOrder(order);
    console.log(newOrder);
    alert("Successfull");
  };

  const componentProps = {
    email,
    amount: amount * 100,
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
