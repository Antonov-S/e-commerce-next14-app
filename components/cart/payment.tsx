"use client";

import { Elements } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";

import getStripe from "@/lib/get-stripe";
import { useCartStore } from "@/lib/client-store";
import PaymentForm from "./payment-form";

const stripe = getStripe();

export default function Payment() {
  const { cart } = useCartStore();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.variant.quantity;
  }, 0);

  return (
    <motion.div>
      <Elements
        stripe={stripe}
        options={{
          mode: "payment",
          currency: "usd",
          amount: totalPrice * 100
        }}
      >
        <PaymentForm totalPrice={totalPrice} />
      </Elements>
    </motion.div>
  );
}
