"use server";

import { createSafeActionClient } from "next-safe-action";

import { auth } from "../auth";
import { db } from "@/server";
import { orderProduct, orders } from "../schema";
import { createOrderSchema } from "@/types/order-schema";

const action = createSafeActionClient();

type Product = {
  productID: number;
  quantity: number;
  variantID: number;
};

export const createOrder = action(
  createOrderSchema,
  async ({ products, status, total, paymentIntentID }) => {
    const user = await auth();
    if (!user) return { error: "User not found" };

    const order = await db
      .insert(orders)
      .values({
        status,
        paymentIntentID,
        total,
        userID: user.user.id
      })
      .returning();
    const orderProducts = products.map(
      async ({ productID, quantity, variantID }: Product) => {
        const newOrderProduct = await db.insert(orderProduct).values({
          quantity,
          orderID: order[0].id,
          productID: productID,
          productVariantID: variantID
        });
      }
    );
    return { success: "Order has been added" };
  }
);
