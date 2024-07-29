"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

import { useCartStore } from "@/lib/client-store";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from "../ui/drawer";
import CartItems from "./cart-items";

export default function CartDrawer() {
  const { cart } = useCartStore();

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="relative px-2">
          <AnimatePresence>
            {cart.length > 0 && (
              <motion.span
                animate={{ scale: 1, opacity: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ scale: 0 }}
                className="absolute flex items-center justify-center -top-1 -right-0.5 w-4 h-4 dark:bg-primary bg-primary text-white text-xs font-bold rounded-full"
              >
                {cart.length}
              </motion.span>
            )}
          </AnimatePresence>
          <ShoppingBag />
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <h1>Cart staff</h1>
        </DrawerHeader>
        <CartItems />
      </DrawerContent>
    </Drawer>
  );
}
