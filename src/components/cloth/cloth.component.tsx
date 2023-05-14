import { IProduct } from "@/store/slices/products/products.slice";
import React, { FunctionComponent } from "react";
import s from "./cloth.module.scss";
import { useNavigate } from "react-router-dom";

interface ICloth {
  product: IProduct;
}

export const Cloth: FunctionComponent<ICloth> = ({ product }) => {

  const navigate = useNavigate()

  return (
    <div className={s.ClothItem} onClick={() => navigate(`/cloth/${product.id}`, {replace: true})}>
      <img
        className={s.ClothImage}
        src={`${product.colors[0].images[0]}`}
        alt="clothe image"
      />
      <div>{product.name}</div>
    </div>
  );
};
