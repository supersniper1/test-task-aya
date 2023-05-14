import { useTypedSelector } from "@/hooks/redux.useTypedSelector";
import React, { FunctionComponent } from "react";
import s from './cart.module.scss'
import { useActions } from "@/hooks/redux.useActions";

export const Cart: FunctionComponent = () => {
  const cartItems = useTypedSelector((state) => state.Cart.cart);
  const sizes = useTypedSelector((state) => state.Sizes.sizes);

  const { CartRemoveItem } = useActions()

  return (
    <div>
      {cartItems &&
        cartItems.map((cartItem, cartItemId) => (
          <div className={s.ProductCard}>
            <img src={`${cartItem.productColor.images[0]}`} alt="product color"/>
            <p>{cartItem.productName}</p>
            <p>{sizes.find(element => element.id === cartItem.productSize).label}</p>
            <p>{cartItem.productColor.price}</p>
            <button onClick={() => {
                CartRemoveItem(cartItemId)
                }}>delete from cart</button>
          </div>
        ))}
    </div>
  );
};
