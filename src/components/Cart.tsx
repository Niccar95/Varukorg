import { IProduct } from "../models/IProduct";

interface IAddedProductProps {
  addedProducts: IProduct[];
}

export const Cart = ({ addedProducts }: IAddedProductProps) => {
  return (
    <>
      <div className="cart">
        <h3>Varukorg</h3>
        <ul>
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
