import { useState } from "react";
import ContainerComp from "./components/ContainerComp";
import NavigationComp from "./components/NavigationComp";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import FooterComp from "./components/FooterComp";

// const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <CartContextProvider>
      {cartOpen && <Cart />}
      {/* <NavigationComp setCartOpen={setCartOpen} />
      <RouterProvider router={router}></RouterProvider>
      <ContainerComp />  */}
      <NavigationComp setCartOpen={setCartOpen} />
      <Outlet />
      <FooterComp />
    </CartContextProvider>
  );
}

export default App;
