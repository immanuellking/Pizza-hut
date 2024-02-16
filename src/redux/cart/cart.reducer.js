import {
  ADD_TO_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  DELETE_ITEM_FROM_CART,
  GET_CART_TOTAL_PRICE,
  CLEAR_CART,
} from "./type";

const initialState = {
  cart: [],
  totalCartPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCartAdd;
      const itemExist = state.cart.find((item) =>
        item.pizzaId === action.payload.id ? item : null
      );
      if (itemExist) {
        updatedCartAdd = state.cart.map((item) =>
          item.pizzaId === itemExist.pizzaId
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
        (item) => item.pizzaId === action.payload
      );
      const updatedCartInc = state.cart.map((item) =>
        item.pizzaId === currentItemInc.pizzaId
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
        (item) => item.pizzaId === action.payload
      );
      if (currentItemDec.quantity === 1) {
        updatedCartDec = state.cart.filter(
          (item) => item.pizzaId !== currentItemDec.pizzaId
        );
      } else {
        updatedCartDec = state.cart.map((item) =>
          item.id === currentItemDec.pizzaId
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.totalPrice - item.unitPrice,
              }
            : item
        );
      }
      return { cart: updatedCartDec };

    case DELETE_ITEM_FROM_CART:
      const updatedCartDel = state.cart.filter(
        (item) => item.pizzaId !== action.payload
      );
      return { cart: updatedCartDel };

    case GET_CART_TOTAL_PRICE:
      const total = state.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);
      return { ...state, totalCartPrice: total };

    case CLEAR_CART:
      return { cart: [], totalCartPrice: 0 };

    default:
      return state;
  }
};

export default reducer;
