import { IProduct } from "../models/Product";

interface IProductProps {
  product: IProduct;
  handleAdd: (id: number) => void;
}

export const Product = ({ product, handleAdd }: IProductProps) => {
  return (
    <>
      <li>
        <h3>{product.name}</h3>
        <p>Pris: {product.price}kr</p>
        <button onClick={() => handleAdd(product.id)}>Köp nu!</button>
      </li>
    </>
  );
};
