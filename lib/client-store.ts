import { create } from "zustand";

export type Variant = {
  variantID: number;
  quantity: number;
};

export type CartItem = {
  name: string;
  image: string;
  id: number;
  variant: Variant;
  price: number;
};

export type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const useCartStore = create<CartState>(set => ({
  cart: [],
  addToCart: item =>
    set(state => {
      const existingItem = state.cart.find(
        i => i.variant.variantID === item.variant.variantID
      );
      if (existingItem) {
        const updatedCard = state.cart.map(cartItem => {
          if (cartItem.variant.variantID === item.variant.variantID) {
            return {
              ...cartItem,
              variant: {
                ...cartItem.variant,
                quantity: cartItem.variant.quantity + item.variant.quantity
              }
            };
          }
          return cartItem;
        });
        return { cart: updatedCard };
      } else {
        return {
          cart: [
            ...state.cart,
            {
              ...item,
              variant: {
                variantID: item.variant.variantID,
                quantity: item.variant.quantity
              }
            }
          ]
        };
      }
    })
}));
