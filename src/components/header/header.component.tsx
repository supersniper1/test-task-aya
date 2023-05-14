import { useTypedSelector } from "@/hooks/redux.useTypedSelector";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {
  const cartItems = useTypedSelector((state) => state.Cart.cart);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/clothes" replace>
              main page
            </Link>
          </li>
          <li>
            <Link to="/cart" replace>
              cart: {cartItems.length}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
