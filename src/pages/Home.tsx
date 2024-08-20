import { useState, useReducer, useEffect } from "react";
import { Products } from "../components/Products";
import { Cart } from "../components/Cart";
import { ActionType, ProductReducer } from "../reducers/ProductReducer";
import { IProduct } from "../models/Product";

export const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts([
      { id: 0, name: "Banan", price: 2, quantity: 0 },
      { id: 1, name: "Melon", price: 3, quantity: 0 },
      { id: 2, name: "Kiwi", price: 4, quantity: 0 },
      { id: 3, name: "Citron", price: 1, quantity: 0 },
      { id: 4, name: "Äpple", price: 2, quantity: 0 },
      { id: 5, name: "Apelsin", price: 1, quantity: 0 },
    ]);
  }, []);

  const [cart, dispatch] = useReducer(ProductReducer, []);

  const handleAdd = (id: number) => {
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd) {
      dispatch({
        type: ActionType.ADDED,
        payload: productToAdd,
      });
    }
  };

  return (
    <>
      <h1>
        {" "}
        &#129389; &#127817; &#127819; The fruit store &#127820; &#127821;
        &#127822;
      </h1>
      <div className="products">
        <Products products={products} handleAdd={handleAdd}></Products>
      </div>
      <Cart cartItems={cart}></Cart>
    </>
  );
};
