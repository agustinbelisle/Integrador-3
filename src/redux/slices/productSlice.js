import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // 🔥 Cambiado de `items` a `products` para mayor claridad
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
