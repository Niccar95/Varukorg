import { useEffect, useState } from "react";
import { IProduct } from "../models/IProduct";
import { Products } from "./Products";
import { Cart } from "./Cart";
import { useAddProducts } from "../hooks/useAddProducts";

export const HomePage = () => {
  const { addProducts, addedProducts } = useAddProducts();
  const [products, setProducts] = useState<IProduct[]>([]);

  console.log(addedProducts);

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

  return (
    <>
      <h1>
        {" "}
        &#129389; &#127817; &#127819; The fruit store &#127820; &#127821;
        &#127822;
      </h1>
      <div className="products">
        <Products products={products} addProducts={addProducts}></Products>
      </div>
      <Cart addedProducts={addedProducts} />
    </>
  );
};
