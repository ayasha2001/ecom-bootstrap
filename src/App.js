import { useState } from "react";
import ContainerComp from "./components/ContainerComp";
import NavigationComp from "./components/NavigationComp";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div>
      <CartContextProvider>
        {cartOpen && <Cart />}
        <NavigationComp setCartOpen={setCartOpen} />
        <ContainerComp />
      </CartContextProvider>
    </div>
  );
}

export default App;
