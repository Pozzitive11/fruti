import { Cart } from "shared/@types";
import { v4 as uuid } from "uuid";

class LocalStorageService<T> {
  private observers: { [id: string]: (localStorageItem: T) => void } = {};

  constructor(private localStorageItemKey: string) {}

  setValue(value: T): void {
    localStorage.setItem(this.localStorageItemKey, JSON.stringify(value));
    Object.values(this.observers).forEach((observer) => observer(value));
  }

  subscribe(observer: (localStorageItem: T) => void): string {
    const id = uuid();
    this.observers[id] = observer;

    return id;
  }

  unsubscribe(id: string) {
    delete this.observers[id];
  }
}

class CartStorage extends LocalStorageService<Cart> {}

export const cartStorage = new CartStorage("cart");
