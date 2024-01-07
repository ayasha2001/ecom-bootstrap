import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StorePage from "./pages/StorePage";
import NavigationComp from "./components/NavigationComp";

function App() {
  // const [cartOpen, setCartOpen] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/store",
      element: <StorePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <div>
        <CartContextProvider>
          <NavigationComp />
          {router.element}
        </CartContextProvider>
      </div>
    </RouterProvider>
    // <AboutPage/>
  );
}

export default App;
