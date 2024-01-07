import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  cartCount: 0,
  onItemAdd: () => {},
});

export default CartContext;
