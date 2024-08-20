import { IProduct } from "../models/Product";

export interface IAction {
  type: ActionType;
  payload: IProduct;
}

export enum ActionType {
  ADDED,
  REMOVED,
}

export const ProductReducer = (
  products: IProduct[],
  action: IAction
): IProduct[] => {
  switch (action.type) {
    case ActionType.ADDED: {
      const productToAdd = action.payload;
      const existingProduct = products.find((p) => p.id === productToAdd.id);

      if (existingProduct) {
        return products.map((p) =>
          p.id === productToAdd.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...products, { ...productToAdd, quantity: 1 }];
      }
    }

    case ActionType.REMOVED:
      return products.filter((product) => product.id !== +action.payload);

    default:
      return products;
  }
};
