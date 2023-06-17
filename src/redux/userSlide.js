import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  contraseña: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { email, contraseña } = action.payload;
      state.email = email;
      state.contraseña = contraseña
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;