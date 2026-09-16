"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Address, CartItem, Product } from "./types";

interface User {
  name: string;
  email: string;
}

interface StoreState {
  items: CartItem[];
  address: Address | null;
  user: User | null;
  cartOpen: boolean;
  authOpen: boolean;
  addressOpen: boolean;
  search: string;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  clearCart: () => void;
  setAddress: (address: Address) => void;
  setUser: (user: User | null) => void;
  setCartOpen: (open: boolean) => void;
  setAuthOpen: (open: boolean) => void;
  setAddressOpen: (open: boolean) => void;
  setSearch: (q: string) => void;
}

export const useShop = create<StoreState>()(
  persist(
    (set, get) => ({
      items: [],
      address: null,
      user: null,
      cartOpen: false,
      authOpen: false,
      addressOpen: false,
      search: "",
      addItem: (product) => {
        const existing = get().items.find((i) => i.product.id === product.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i,
            ),
            cartOpen: true,
          });
        } else {
          set({ items: [...get().items, { product, qty: 1 }], cartOpen: true });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((i) => i.product.id !== id) }),
      setQty: (id, qty) =>
        set({
          items:
            qty <= 0
              ? get().items.filter((i) => i.product.id !== id)
              : get().items.map((i) =>
                  i.product.id === id ? { ...i, qty } : i,
                ),
        }),
      clearCart: () => set({ items: [] }),
      setAddress: (address) => set({ address, addressOpen: false }),
      setUser: (user) => set({ user, authOpen: false }),
      setCartOpen: (cartOpen) => set({ cartOpen }),
      setAuthOpen: (authOpen) => set({ authOpen }),
      setAddressOpen: (addressOpen) => set({ addressOpen }),
      setSearch: (search) => set({ search }),
    }),
    {
      name: "vizhen-shop",
      partialize: (s) => ({
        items: s.items,
        address: s.address,
        user: s.user,
      }),
    },
  ),
);

export function cartCount(items: CartItem[]) {
  return items.reduce((n, i) => n + i.qty, 0);
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((n, i) => {
    const unit = i.product.salePrice ?? i.product.price;
    return n + unit * i.qty;
  }, 0);
}
