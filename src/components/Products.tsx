import { IProduct } from "../models/IProduct";
import { Product } from "./Product";

interface IProductsProps {
  products: IProduct[];
  addProducts: (product: IProduct) => void;
}

export const Products = ({ products, addProducts }: IProductsProps) => {
  return (
    <>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              addProducts={addProducts}
            ></Product>
          );
        })}
    </>
  );
};
