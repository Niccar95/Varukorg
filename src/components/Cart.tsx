import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { IProduct } from "../models/IProduct";

interface IAddedProductProps {
  addedProducts: IProduct[];
}

export const Cart = ({ addedProducts }: IAddedProductProps) => {
  const toggle = useContext(CartContext);

  console.log("Cart Visibility:", toggle); // Log visibility state
  console.log("Added Products:", addedProducts);

  return (
    <>
      <div className={toggle ? "displayCart" : "hideCart"}>
        <h3>Varukorg</h3>
        <ul className="cartProducts">
          {addedProducts.length > 0 &&
            addedProducts.map((product) => (
              <li key={product.id}>
                Produkt: {product.name} - Mängd: {product.quantity} st
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
