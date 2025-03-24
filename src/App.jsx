import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ]);
  return (
    <>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              Nome: {product.name} - Prezzo: {product.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
