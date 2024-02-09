import { ADD_TO_CART } from "./type";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCart;
      const itemExist = state.cart.find((item) =>
        item.id === action.payload.id ? item : null
      );
      if (itemExist) {
        updatedCart = state.cart.map((item) =>
          item.id === itemExist.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                totalPrice: item.totalPrice + action.payload.totalPrice,
              }
            : item
        );
      } else {
        updatedCart = [...state.cart, action.payload];
      }

      return { cart: updatedCart };

    default:
      return state;
  }
};

export default reducer;
