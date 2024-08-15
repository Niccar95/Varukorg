import { IProduct } from "../models/IProduct";

interface IProductProps {
  product: IProduct;
  addProducts: (product: IProduct) => void;
}

export const Product = ({ product, addProducts }: IProductProps) => {
  const addToCart = () => {
    addProducts(product);
    console.log(product);
  };

  return (
    <>
      <li>
        <h3>{product.name}</h3>
        <p>Pris: {product.price}kr</p>
        <button onClick={addToCart}>Köp nu!</button>
      </li>
    </>
  );
};
