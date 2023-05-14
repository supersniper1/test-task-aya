import React, { FunctionComponent, useMemo } from "react";
import { getProducts } from "@/services/api";
import { useActions } from "@hooks/redux.useActions";
import { useTypedSelector } from "@/hooks/redux.useTypedSelector";
import { Components } from "@/components/export.components";
import s from './clothes.module.scss'

export const Clothes: FunctionComponent = () => {
  const productsList = useTypedSelector((state) => state.Products.products);

  const { ProductsGet } = useActions();

  useMemo(() => {
    getProducts().then((products) => {
      ProductsGet(products);
    });
  }, []);

  return (
    <div className={s.Clotes}>
      {productsList.map((product) => (
        <Components.Cloth key={product.id} product={product} />
      ))}
    </div>
  );
};
