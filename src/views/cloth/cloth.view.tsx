import React, { FunctionComponent, useMemo, useState } from "react";
import { IProduct } from "@store/slices/products/products.slice";
import { useParams } from "react-router-dom";
import { getProduct, getSizes } from "@/services/api";
import s from "./cloth.module.scss";
import { useActions } from "@/hooks/redux.useActions";
import { useTypedSelector } from "@/hooks/redux.useTypedSelector";

export const Cloth: FunctionComponent = () => {
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [pickedColor, setPickedColor] = useState<number | undefined>(undefined);
  const [pickedSize, setPickedSize] = useState<number | undefined>(undefined);

  const sizes = useTypedSelector((state) => state.Sizes.sizes);

  const { clothId } = useParams();

  const { SizesGet, CartAddItem } = useActions();

  useMemo(() => {
    getProduct(clothId).then((product) => setProduct(product));
    getSizes().then((sizes) => SizesGet(sizes));
  }, []);

  const colorObj = () => {
    return product.colors.find((element) => element.id === pickedColor);
  };

  const addToCart = (pickedColor: number, pickedSize: number) => {
    const productColor = product.colors.find((element) => element.id === pickedColor)
    const CartItem = {
      productId: product.id,
      productName: product.name,
      productColor: productColor,
      productSize: pickedSize,
    };
    CartAddItem(CartItem)
  };

  return (
    <>
      {product && (
        <div className={s.ProductPage}>
          <div className={s.ImagesButtons}>
            <img
              className={s.ProductImage}
              src={`${product.colors[0].images[0]}`}
              alt="product image"
            />
            <div className={s.Buttons}>
              <div className={s.ColorButtons}>
                {product.colors.map((color) => (
                  <button onClick={() => setPickedColor(color.id)}>
                    {color.name}
                  </button>
                ))}
              </div>
              {pickedColor && (
                <>
                  <div className={s.SizeButtons}>
                    {sizes &&
                      colorObj().sizes.map((size: number) => {
                        const currentSize = sizes.find(
                          (element) => element.id === size
                        );

                        return (
                          <button onClick={() => setPickedSize(currentSize.id)}>
                            {currentSize.label}
                          </button>
                        );
                      })}
                  </div>
                  <p>{colorObj().price}</p>
                </>
              )}
            </div>
            {pickedColor && pickedSize && colorObj().sizes.length !== 0 ? (
              <button onClick={() => addToCart(pickedColor, pickedSize)}>
                add to cart
              </button>
            ) : (
              <button disabled>add to cart</button>
            )}
          </div>
          {pickedColor && <p>{colorObj().description}</p>}
        </div>
      )}
    </>
  );
};
