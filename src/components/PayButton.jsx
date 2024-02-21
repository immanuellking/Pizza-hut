import React from "react";
import { PaystackButton } from "react-paystack";
import Button from "./Button";

const PayButton = ({ amount, email }) => {
  const publicKey = import.meta.env.VITE_PS_PUBLIC_KEY;
  //   const [reference, setReference] = React.useState("");

  const handlePaystackSuccessAction = (reference) => {
    // handle payment success
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
