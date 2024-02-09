import { ADD_TO_CART } from "./type";

export const addToCart = (pizza) => {
    return {
        type: ADD_TO_CART,
        payload: pizza,
    }
}