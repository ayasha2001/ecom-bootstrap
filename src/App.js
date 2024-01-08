import { useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import NavigationComp from "./components/NavigationComp";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContextProvider";
import FooterComp from "./components/FooterComp";
import AuthContextProvider from "./context/AuthContextProvider";

// const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartContextProvider>
      <AuthContextProvider>
        {cartOpen && <Cart />}
        {/* <NavigationComp setCartOpen={setCartOpen} />
      <RouterProvider router={router}></RouterProvider>
      <ContainerComp />  */}
        <NavigationComp setCartOpen={setCartOpen} />
        <Outlet />
        <FooterComp />
      </AuthContextProvider>
    </CartContextProvider>
  );
}

export default App;
