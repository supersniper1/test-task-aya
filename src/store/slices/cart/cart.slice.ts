import { createSlice, current } from "@reduxjs/toolkit";
import { IColor } from "../products/products.slice";

export interface ICart {
  cart: ICartItem[];
}

export interface ICartItem {
  productId: number;
  productName: string;
  productColor: IColor;
  productSize: number;
}

const initialState: ICart = {
  cart: [],
};

export const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
      CartAddItem: (state, action) => {
        state.cart.push(action.payload);
      },
      CartRemoveItem: (state, {payload}) => {
        const currentState = current(state)
        state.cart = currentState.cart.filter((element, id) => id !== payload);
      },
    },
  });
  
  export const CartReducer = CartSlice.reducer;
  export const CartActions = CartSlice.actions;