import React, { useEffect } from "react";
import { formatCurrency } from "../utils/formatters";

const Modal = ({ show, pizza, setShow }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
      className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center overscroll-none overflow-hidden"
      style={{ zIndex: 2000 }}
    >
      <main className="min-w-[30rem] bg-white relative">
        <div className="mx-5 my-5">
          <img src={imageUrl} alt="pizza" className="w-full h-72" />
          <div className="px-3 py-4 space-y-3">
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
        <div>
          
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
