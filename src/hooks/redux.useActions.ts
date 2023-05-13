import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {ProductsActions} from "@store/slices/products/products.slice";

const AllActions = {
  ...ProductsActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
