import React, { useState } from "react";
import { formatCurrency } from "../utils/formatters";
import Modal from "./Modal";

const MenuItem = ({ pizza }) => {
  const { name, unitPrice, ingredients, imageUrl } = pizza;

  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="rounded-xl border-[1px] overflow-hidden cursor-pointer group"
        onClick={() => setShow(true)}
      >
        <div className="h-52 lg:h-60 w-full overflow-hidden w">
          <img
            src={imageUrl}
            alt="pizza"
            className="w-full h-full scale-100 group-hover:scale-110 duration-200 ease-in"
          />
        </div>
        <div className="px-3 py-4 space-y-3">
          <div className="flex justify-between">
            <h3 className="text-base">{name}</h3>
            <p className="font-semibold">{formatCurrency(unitPrice)}</p>
          </div>
          <div className="flex flex-wrap gap-x-1">
            {ingredients.map((ingredient, index) => (
              <p className="text-sm text-[#a4a7ae]" key={index}>
                {ingredient}
              </p>
            ))}
          </div>
        </div>
      </div>

      {show && <Modal setShow={setShow} pizza={pizza} />}
    </>
  );
};

export default MenuItem;
