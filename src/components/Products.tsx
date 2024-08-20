import { IProduct } from "../models/Product";
import { Product } from "./Product";

interface IProductsProps {
  products: IProduct[];
  handleAdd: (id: number) => void;
}

export const Products = ({ products, handleAdd }: IProductsProps) => {
  return (
    <>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              handleAdd={handleAdd}
            ></Product>
          );
        })}
    </>
  );
};
