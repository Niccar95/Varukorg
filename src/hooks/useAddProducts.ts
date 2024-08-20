import { useState } from "react";
import { Product } from "../models/Product";

export const useAddProducts = () => {
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);

  const addProducts = (product: Product) => {
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
