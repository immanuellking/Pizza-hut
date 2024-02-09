import React from "react";
import Button from "./Button";

const UpdateItemCart = ({ increaseAmount, decreaseAmount, value }) => {
  return (
    <div className="flex items-center gap-x-5">
      <Button type="round" onClick={decreaseAmount}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18"
            stroke="#303237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </Button>
      <span>{value}</span>
      <Button type="round" onClick={increaseAmount}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12H18"
            stroke="#303237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 18V6"
            stroke="#303237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

export default UpdateItemCart;
