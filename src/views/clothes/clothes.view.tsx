import React, {FunctionComponent, useCallback} from 'react';
import {getProducts} from "@/services/api";
import {useActions} from "@hooks/redux.useActions";

export const Clothes: FunctionComponent = () => {

  const {
    ProductsGet,
  } = useActions()

  useCallback(() => {
    getProducts()
      .then((products) => {
        ProductsGet(products)
      })
  }, [])

  return (
    <div>
      hello clothes
    </div>
  );
};
