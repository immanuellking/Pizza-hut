import React, { useEffect, useState } from "react";
import { formatCurrency } from "../utils/formatters";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActionCreators } from "../redux/cart";
import UpdateItemCart from "./UpdateItemCart";

const Modal = ({ show, pizza, setShow }) => {
  const [value, setValue] = useState(1);
  const { id, name, unitPrice, ingredients, imageUrl } = pizza;

  const dispatch = useDispatch();

  const { addToCart } = bindActionCreators(cartActionCreators, dispatch);

  const increaseAmount = () => {
    setValue((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    setValue((prev) => {
      if (prev === 1) {
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
      imageUrl,
      ingredients,
      quantity: value,
      unitPrice,
      totalPrice: unitPrice * value,
    };
    addToCart(newItem);
    setShow(false);
  };

  useEffect(() => {
    // Disable scrolling on the body when the modal is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the modal is unmounted
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-end sm:items-center overscroll-none overflow-hidden"
      style={{ zIndex: 2000 }}
      // onClick={() => setShow(false)}
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
          <UpdateItemCart increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} value={value} />
          <Button type={"primary"} onClick={handleAddToCart}>
            Add to order
          </Button>
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
