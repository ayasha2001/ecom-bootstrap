import ContainerComp from "../components/ContainerComp";
import Product from "../components/Product";
import CartContextProvider from "../context/CartContextProvider";
const HomePage = () => {
  return (
    <ContainerComp element={<Product />} />
  );
};

export default HomePage;
