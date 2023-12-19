import { createContext } from "react";
import { useState } from "react";
import medData from "../../data/medicine/db.json";

export const MedContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < medData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function MedContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  console.log(cartItems);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <MedContext.Provider value={contextValue}>
      {props.children}
    </MedContext.Provider>
  );
}
