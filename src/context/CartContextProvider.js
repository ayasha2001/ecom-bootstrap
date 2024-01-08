import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const email = "ayashapandey2001@gmail.com";

  useEffect(() => {
    let c = 0;
    cartItems.forEach((item) => {
      c += Number(item.quantity);
    });
    setCount(c);
  }, [cartItems]);

  useEffect(()=>{
    fetchAllFromApi()
  },[])

  const fetchAllFromApi = async () => {
    try {
      const emailId = email.replace(/[.@]/g, "");
      const response = await fetch(
        `https://crudcrud.com/api/e5c0eee997624645887a66bf9cec5636/${emailId}`
      );
      if (!response.ok) {
        console.error("Failed to save cart items");
      }
      const json = await response.json();
      console.log("json:", json);
      setCartItems(json);
      return json;
    } catch (error) {
      console.error("Error saving cart items:", error);
    }
  };

  const postRequest = async (newItem) => {
    const emailId = email.replace(/[.@]/g, "");
    const response = await fetch(
      `https://crudcrud.com/api/e5c0eee997624645887a66bf9cec5636/${emailId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );

    if (!response.ok) {
      console.error("Failed to save cart items");
    }
    const json = await response.json();
    console.log("json:", json);
    return json;
  };

  const updateRequest = async (id, newItem) => {
    const emailId = email.replace(/[.@]/g, "");
    const response = await fetch(
      `https://crudcrud.com/api/e5c0eee997624645887a66bf9cec5636/${emailId}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newItem,
          quantity: Number(newItem.quantity) + 1,
        }),
      }
    );

    if (!response.ok) {
      console.error("Failed to update cart item. Status:", response.status);
      return null;
    }

    try {
      const json = await response.json();
      console.log("json:", json);
      return json;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  };

  const onItemAdd = async (newItem) => {
    try {
      if (newItem) {
        const emailId = email.replace(/[.@]/g, "");
        const arr = await fetchAllFromApi();
        const exists = arr.find((item) => {
          console.log(item.id, newItem.id);
          return item?.id === newItem.id;
        });

        if (!exists) {
          await postRequest(newItem);
        } else {
          await updateRequest(exists._id, newItem);
        }

        // Call fetchAllFromApi after successful post or update
        await fetchAllFromApi();
      }
    } catch (error) {
      console.error("Error saving cart items:", error);
    }
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
