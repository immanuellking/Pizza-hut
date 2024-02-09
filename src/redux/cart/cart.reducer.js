import { ADD_TO_CART } from "./type";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:

      return {cart: [...state.cart, action.payload]};

    default:
      return state;
  }
};


export default reducer