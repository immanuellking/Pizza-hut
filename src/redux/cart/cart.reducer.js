import { ADD_TO_CART } from "./type";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state;

    default:
      return state;
  }
};


export default reducer