import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { IProduct } from "../models/Product";

interface ICartItemsProps {
  cartItems: IProduct[];
}

export const Cart = ({ cartItems }: ICartItemsProps) => {
  const toggle = useContext(CartContext);

  console.log("Cart Visibility:", toggle);
  console.log("Added Products:");

  return (
    <>
      <div className={toggle ? "displayCart" : "hideCart"}>
        <h3>Varukorg</h3>
        <ul className="cartProducts">
          {cartItems.length > 0 &&
            cartItems.map((product) => (
              <li key={product.id}>
                Produkt: {product.name} - Mängd: {product.quantity} st
                <button>remove</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
