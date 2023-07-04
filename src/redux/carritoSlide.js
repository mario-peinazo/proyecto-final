import { createSlice } from "@reduxjs/toolkit";

const carrito =
  localStorage.getItem("carrito") !== null
    ? JSON.parse(localStorage.getItem("carrito"))
    : [];

const precioTotal =
  localStorage.getItem("precioTotal") !== null
    ? JSON.parse(localStorage.getItem("precioTotal"))
    : 0;

const setItemFunc = (carrito, precioTotal) => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("precioTotal", JSON.stringify(precioTotal));
};

const initialState = {
  carrito: carrito,
  precioTotal: precioTotal,
  verCarrito: false,
  gatitos: false
};

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { nuevoColor, nuevaCantidad } = action.payload;
      const producto = { color: nuevoColor, cantidad: nuevaCantidad };
      const posicion = state.carrito.findIndex((d) => d.color == nuevoColor);

      if (posicion == -1) {
        state.carrito.push(producto);
      } else {
        state.carrito[posicion].cantidad += nuevaCantidad;
      }

      const total = state.carrito.reduce(
        (prev, curr) => prev + curr.cantidad,
        0
      );
      state.precioTotal = total * 58;

      setItemFunc(
        state.carrito.map((item) => item),
        state.precioTotal
      );
    },
    sumarCant: (state, action) => {
      state.carrito[action.payload].cantidad += 1;

      const total = state.carrito.reduce(
        (prev, curr) => prev + curr.cantidad,
        0
      );
      state.precioTotal = total * 58;

      setItemFunc(
        state.carrito.map((item) => item),
        state.precioTotal
      );
    },
    restarCant: (state, action) => {
      state.carrito[action.payload].cantidad != 1
        ? (state.carrito[action.payload].cantidad -= 1)
        : state.carrito.splice(action.payload, 1);

      const total = state.carrito.reduce(
        (prev, curr) => prev + curr.cantidad,
        0
      );
      state.precioTotal = total * 58;

      setItemFunc(
        state.carrito.map((item) => item),
        state.precioTotal
      );
    },
    borrarProd: (state, action) => {
      state.carrito.splice(action.payload, 1);

      const total = state.carrito.reduce(
        (prev, curr) => prev + curr.cantidad,
        0
      );
      state.precioTotal = total * 58;

      setItemFunc(
        state.carrito.map((item) => item),
        state.precioTotal
      );
    },
    estadoCarrito: (state, action) => {
      state.verCarrito = action.payload;
    },
    gatitosSorpresa: (state, action) => {
      state.gatitos = action.payload;
    },
    sesionIniciada: (state, action) => {
      state.Sesion = action.payload;
    },
  },
});

export const { addProduct, sumarCant, restarCant, borrarProd, estadoCarrito, gatitosSorpresa } =
  carritoSlice.actions;
export default carritoSlice.reducer;
