import React, { useEffect } from "react";
import { getOrder } from "../services/apiRestaurant";
import { useLoaderData, useFetcher } from "react-router-dom";
import { calcMinutesLeft } from "../utils/minutesLeft";
import { formatCurrency, formatDate } from "../utils/formatters";
import OrderItem from "../components/OrderItem";

const Order = () => {
  const order = useLoaderData();
  const fetcher = useFetcher();

  const {
    id,
    status,
    estimatedDelivery,
    priority,
    cart,
    orderPrice,
    priorityPrice,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(deliveryIn);

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[60%] mx-auto mb-5 sm:mb-10 mt-44 sm:mt-28">
      <div className="flex flex-col sm:flex-row gap-y-4 justify-between mb-8">
        <h2 className="text-lg font-semibold text-gray-500">
          Order<span className="text-xl font-bold text-black ml-2">#{id}</span>
        </h2>

        <div className="flex items-center justify-between gap-x-1 sm:gap-x-2">
          <p className="text-lg font-semibold text-gray-500">Status</p>
          <div className="space-x-1 sm:space-x-2">
            {priority && (
              <span className="px-4 sm:px-8 py-2 uppercase rounded-full font-semibold bg-red-500 text-sm text-white">
                Priority
              </span>
            )}
            <span className="px-4 sm:px-8 py-2 uppercase rounded-full font-semibold bg-green-500 text-sm text-white">
              {status}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start justify-center gap-y-2 sm:justify-between sm:items-center bg-black h-20 sm:text-lg font-semibold text-white px-2 sm:px-6">
        <p>
          {deliveryIn > 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 🛵`
            : "Order should have arrived"}
        </p>
        <p>(Estimated Delivery: {formatDate(estimatedDelivery)})⏰</p>
      </div>

      <div>
        <ul>
          {cart.map((item) => (
            <OrderItem
              key={item.pizzaId}
              item={item}
              isLoadingIngredients={fetcher.state === "loading"}
              ingredients={
                fetcher?.data?.find((pizza) => pizza.id === item.pizzaId)
                  .ingredients ?? []
              }
            />
          ))}
        </ul>
      </div>

      <div className="w-full bg-stone-200 px-2 sm:px-4 py-4 space-y-4">
        <div className="w-full flex justify-between">
          <p className="font-medium italic text-lg">Pizza Price:</p>
          <div className="flex items-center space-x-1">
            <p className="font-bold text-lg">{formatCurrency(orderPrice)}</p>
            <p className="text-gray-600">
              (NGN{(orderPrice * 1700).toLocaleString()})
            </p>
          </div>
        </div>
        {priority && (
          <div className="w-full flex justify-between">
            <p className="font-medium italic text-lg">Priority Price:</p>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-lg">{formatCurrency(priorityPrice)}</p>
              <p className="text-gray-600">
                (NGN{(priorityPrice * 1700).toLocaleString()})
              </p>
            </div>
          </div>
        )}
        <div className="w-full flex justify-between">
          <p className="font-medium italic text-lg">Total Paid</p>
          <div className="flex items-center space-x-1">
            <p className="font-bold text-lg">
              {formatCurrency(orderPrice + priorityPrice)}
            </p>
            <p className="text-gray-600">
              (NGN{((orderPrice * 1700) + ( priorityPrice * 1700)).toLocaleString()})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  console.log(order);

  return order;
}
