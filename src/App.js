import { useState } from "react";
import ContainerComp from "./components/ContainerComp";
import NavigationComp from "./components/NavigationComp";
import Cart from "./components/cart/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div>
      {cartOpen && <Cart/>}
      <NavigationComp setCartOpen={setCartOpen}/>
      <ContainerComp />
    </div>
  );
}

export default App;
