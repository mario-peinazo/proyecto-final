import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./carritoSlide";

export const store = configureStore({
  reducer: {
    carrito: carritoReducer,
  },
});