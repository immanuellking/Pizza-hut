import { createStore } from "redux";
import cartReducer from "./cart/cart.reducer";

export const store = createStore(cartReducer)