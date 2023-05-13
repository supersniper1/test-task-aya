import { createSlice } from "@reduxjs/toolkit";

export type IProductsSlice = Product[]

export interface Product {
  id: number;
  name: string;
  colors: Color[];
}

export interface Color {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
}

const initialState: IProductsSlice = []

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    ProductsGet: (state, action) => {
      state = action.payload;
    },
  },
});

export const ProductsReducer = ProductsSlice.reducer;
export const ProductsActions = ProductsSlice.actions;
