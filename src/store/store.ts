import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducer } from "@store/slices/products/products.slice";
import { SizesReducer } from "./slices/sizes/sizes.slice";
import { CartReducer } from "./slices/cart/cart.slice";

export const store = configureStore({
  reducer: {
    Products: ProductsReducer,
    Sizes: SizesReducer,
    Cart: CartReducer,
  },
});

export type TypedRootState = ReturnType<typeof store.getState>;
