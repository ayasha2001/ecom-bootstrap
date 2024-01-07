import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let c = 0;
    cartItems.forEach((item) => {
      c += Number(item.quantity);
    });
    setCount(c);
  }, [cartItems]);

  const onItemAdd = (newItem) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => {
        return item.id === newItem.id;
      });

      if (exists) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, newItem];
      }
    });
  };

  const cartContext = {
    count: count,
    cartItems: cartItems,
    onItemAdd: onItemAdd,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
