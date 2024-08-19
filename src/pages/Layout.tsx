import { NavLink, Outlet } from "react-router-dom";
import { useAddProducts } from "../hooks/useAddProducts";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";

export const Layout = () => {
  const { addedProducts } = useAddProducts();

  const [cartVisible, setCartVisible] = useState<boolean>(false);

  const cartDisplayToggle = () => {
    setCartVisible(!cartVisible);
    console.log(cartVisible);
  };

  console.log("Added Products in Layout:", addedProducts);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={""}>Cart</NavLink>
            </li>
          </ul>

          <div className="iconContainer" onClick={cartDisplayToggle}>
            <img
              className="icon"
              src="/src/assets/cart-shopping-solid.svg"
            ></img>
          </div>
        </nav>
      </header>

      <CartContext.Provider value={cartVisible}>
        <main>
          <Outlet />
        </main>
      </CartContext.Provider>
    </>
  );
};
