import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductsSliceState } from "./../../Types/store";

// Import mock data;
import { products } from "./../../Data/products";

let initialState: ProductsSliceState = {
  products: products,
};

const productSlice = createSlice({
  name: "productRed",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
