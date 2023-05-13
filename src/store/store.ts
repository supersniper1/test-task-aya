import { configureStore } from "@reduxjs/toolkit";
import {ProductsReducer} from "@store/slices/products/products.slice";

export const store = configureStore({
  reducer: {
    Products: ProductsReducer,
  }
})

export type TypedRootState = ReturnType<typeof store.getState>;
