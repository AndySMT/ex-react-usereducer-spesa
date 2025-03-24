import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.1 },
    { name: "Pasta", price: 0.7 },
  ]);

  const [addedProducts, setAddedProducts] = useState([]);
  function addToCart(product) {
    const prodotto = addedProducts.find((prod) => prod.name === product.name);
    if (!prodotto) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }
  }

  return (
    <>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index} className="p-1">
              Nome: {product.name} - Prezzo: {product.price}
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 rounded px-1 ml-2"
              >
                Aggiungi al carrello
              </button>
            </li>
          );
        })}
      </ul>
      <h1 className="text-red-600">Carrello</h1>
      <ul>
        {addedProducts.map((prod, index) => {
          return (
            <li key={index}>
              Nome: {prod.name} - Prezzo: {prod.price} - Quantità:{" "}
              {prod.quantity}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
