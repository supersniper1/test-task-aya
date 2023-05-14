import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ProductsActions } from "@store/slices/products/products.slice";
import { SizesActions } from "@/store/slices/sizes/sizes.slice";
import { CartActions } from "@/store/slices/cart/cart.slice";

const AllActions = {
  ...ProductsActions,
  ...SizesActions,
  ...CartActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
