import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from './freatures/cart/cartSlice';

export const store = configureStore({
    reducer : {
        cart: cartReducer
    },
});
