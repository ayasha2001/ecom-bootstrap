import Product, { productsArr } from "./Product";

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4">E-commerce Website</h1>
      <div className="row">
        {productsArr.map((product, index) => (
          <div key={index} className="col-md-6 mx-auto">
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
