"use client";

import { ShoppingBag } from "lucide-react";

import { useCartStore } from "@/lib/client-store";

export default function CartDrawer() {
  const { cart } = useCartStore();

  return (
    <div>
      <ShoppingBag />
    </div>
  );
}
