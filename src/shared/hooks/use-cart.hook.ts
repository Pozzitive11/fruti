import { useState, useEffect } from "react";
import { Cart } from "../@types";
import { cartStorage } from "../services";

export function useCart() {
  const [cart, setCart] = useState<Cart>(() => {
    const localStorageItem = localStorage.getItem("cart");
    const currentValue = localStorageItem ? JSON.parse(localStorageItem) : null;

    return currentValue ?? [];
  });

  useEffect(() => {
    const cartSubID = cartStorage.subscribe((updatedCart) => {
      setCart(updatedCart);
    });

    return () => {
      cartStorage.unsubscribe(cartSubID);
    };
  }, []);

  return [cart, (updatedCart: Cart) => cartStorage.setValue(updatedCart)];
}
