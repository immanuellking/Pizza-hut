import React from "react";

const EmptyCart = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <img src="/empty.avif" className="w-64" alt="empty" />
      <div>
        <h1 className="font-bold text-3xl">Your cart is empty</h1>
      </div>
    </div>
  );
};

export default EmptyCart;
