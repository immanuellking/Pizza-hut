import {
  ADD_TO_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
} from "./type";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCartAdd;
      const itemExist = state.cart.find((item) =>
        item.id === action.payload.id ? item : null
      );
      if (itemExist) {
        updatedCartAdd = state.cart.map((item) =>
          item.id === itemExist.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                totalPrice: item.totalPrice + action.payload.totalPrice,
              }
            : item
        );
      } else {
        updatedCartAdd = [...state.cart, action.payload];
      }
      return { cart: updatedCartAdd };
    case INCREASE_ITEM_QUANTITY:
      const currentItemInc = state.cart.find(
        (item) => item.id === action.payload
      );
      const updatedCartInc = state.cart.map((item) =>
        item.id === currentItemInc.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.unitPrice,
            }
          : item
      );
      return { cart: updatedCartInc };

    case DECREASE_ITEM_QUANTITY:
      let updatedCartDec;

      const currentItemDec = state.cart.find(
        (item) => item.id === action.payload
      );
      if (currentItemDec.quantity === 1) {
        updatedCartDec = state.cart.filter(
          (item) => item.id !== currentItemDec.id
        );
      } else {
        updatedCartDec = state.cart.map((item) =>
          item.id === currentItemDec.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.totalPrice - item.unitPrice,
              }
            : item
        );
      }

      return { cart: updatedCartDec };

    default:
      return state;
  }
};

export default reducer;
