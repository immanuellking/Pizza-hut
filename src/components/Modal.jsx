import React, { useEffect, useState } from "react";
import { formatCurrency } from "../utils/formatters";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActionCreators } from "../redux/cart";

const Modal = ({ show, pizza, setShow }) => {
  const [value, setValue] = useState(1);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)

  const { addToCart } = bindActionCreators(cartActionCreators, dispatch);

  const increaseAmount = () => {
    setValue((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    setValue((prev) => {
      if (prev === 1) {un
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const handleAddToCart = () => {
    const newItem = {
      id,
      name,
      quantity: value,
      unitPrice,
      totalPrice: unitPrice * value
    }
    addToCart(newItem)
  }

  useEffect(() => {
    // Disable scrolling on the body when the modal is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the modal is unmounted
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  console.log("CAAAAAAAAAAAAAAARRRRRRRRRTTTT",cart)

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-end sm:items-center overscroll-none overflow-hidden"
      style={{ zIndex: 2000 }}
      onClick={() => setShow(false)}
    >
      <main className="w-full sm:max-w-[30rem] bg-white relative rounded-3xl">
        <div className="mx-5 my-5">
          <div className="w-full h-72 overflow-hidden rounded-t-2xl">
          <img src={imageUrl} alt="pizza" className="w-full h-full" />
          </div>
          <div className=" py-4 space-y-3">
            <div className="flex justify-between">
              <h3 className="text-base font-bold">{name}</h3>
              <p className="font-semibold">{formatCurrency(unitPrice)}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="">Ingredients :</h2>
              <div className="flex flex-wrap gap-x-1">
                {ingredients.map((ingredient, index) => (
                  <p className="text-sm text-[#a4a7ae]" key={index}>
                    {ingredient}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-5 py-6 shadow-[rgba(50,50,71,.05)_0px_-4px_10px_0px]">
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
          <Button type={"primary"} onClick={handleAddToCart} >Add to order</Button>
        </div>

        <div
          className="absolute right-7 top-7 bg-[#F4F5F8] h-11 w-11 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => setShow(false)}
        >
          <span className="text-4xl">&times;</span>
        </div>
      </main>
    </div>
  );
};

export default Modal;
