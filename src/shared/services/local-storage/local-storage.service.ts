import { Cart } from "entities/cart/models";
import { v4 as uuid } from "uuid";

class LocalStorageService<T> {
  static isSingle: boolean;
  private observers: { [id: string]: (localStorageItem: T) => void } = {};

  constructor(private localStorageItemKey: string) {
    if (LocalStorageService.isSingle) {
      throw new Error("LocalStorageService already created");
    }
    LocalStorageService.isSingle = true;
  }

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
