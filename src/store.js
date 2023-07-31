import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from "@reduxjs/toolkit"; './freatures/cart/cartSlice';

export const store = configureStore({
    reducer : {
        cart: cartReducer
    },
});