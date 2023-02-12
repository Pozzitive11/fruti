import { Cart } from "./cart.model";

export interface AddCartItemDto {
  currentProductIndex: number;
  currentProducts: Cart;
  id?: string;
  setProducts: (updatedCart: Cart) => void;
}

export interface MinusCartItemDto {
  currentProductIndex: number;
  currentProducts: Cart;
  setProducts: (updatedCart: Cart) => void;
}
export interface DeleteCartItemDto {
  currentProducts: Cart;
  id?: string;
  setProducts: (updatedCart: Cart) => void;
}
