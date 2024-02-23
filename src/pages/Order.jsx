import React from "react";
import { getOrder } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const order = useLoaderData();
  const {id} = order;
  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[50%] mx-auto my-5 sm:my-10">
      <div>
        <h2>
          Order <span>#{}</span>
        </h2>
      </div>
    </div>
  );
};

export default Order;

export const loader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  console.log(order);

  return order;
};

// http://localhost:5173/order/BQZXVP
