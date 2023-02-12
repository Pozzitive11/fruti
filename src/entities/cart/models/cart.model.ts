export interface CartItemType {
  id?: string;
  quantity: number;
  price?: number;
}

export interface ProductToBuy {
  quantity: number;
  price: number;
}

export type Cart = CartItemType[];
