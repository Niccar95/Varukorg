import { useState } from "react";
import { IProduct } from "../models/IProduct";

export const useAddProducts = () => {
  const [addedProducts, setAddedProducts] = useState<IProduct[]>([]);

  const addProducts = (product: IProduct) => {
    const updatedProducts = addedProducts.map((p) =>
      p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
    );

    if (!addedProducts.some((p) => p.id === product.id)) {
      setAddedProducts([...updatedProducts, { ...product, quantity: 1 }]);
    } else {
      setAddedProducts(updatedProducts);
    }
  };
  return { addProducts, addedProducts };
};
