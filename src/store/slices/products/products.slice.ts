import { createSlice } from "@reduxjs/toolkit";

export interface IProductsSlice {
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  colors: IColor[];
}

export interface IColor {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
}

const initialState: IProductsSlice = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    ProductsGet: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const ProductsReducer = ProductsSlice.reducer;
export const ProductsActions = ProductsSlice.actions;
