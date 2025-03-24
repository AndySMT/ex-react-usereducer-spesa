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
    } else {
      const incrementa = addedProducts.map((prod) => {
        if (prod.name === product.name) {
          return { ...prod, quantity: prod.quantity + 1 };
        }
        return prod;
      });
      setAddedProducts(incrementa);
    }
  }

  function remove(product) {
    const products = addedProducts.filter((prod) => prod.name !== product.name);
    setAddedProducts(products);
  }

  const totale = addedProducts.reduce((acc, prod) => {
    return acc + prod.price * prod.quantity;
  }, 0);

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
              <button onClick={() => remove(prod)}>❌</button>
            </li>
          );
        })}
      </ul>
      {addedProducts.length > 0 && (
        <p className="text-blue-700">Totale da pagare: {totale.toFixed(2)}</p>
      )}
    </>
  );
}

export default App;
