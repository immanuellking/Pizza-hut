import {
  ADD_TO_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
} from "./type";

export const addToCart = (pizza) => {
  return {
    type: ADD_TO_CART,
    payload: pizza,
  };
};

export const increaseItemQuantity = (id) => {
  return {
    type: INCREASE_ITEM_QUANTITY,
    payload: id,
  };
};

export const decreaseItemQuantity = (id) => {
  return {
    type: DECREASE_ITEM_QUANTITY,
    payload: id,
  };
};


