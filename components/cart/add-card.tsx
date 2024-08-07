"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";

import { useCartStore } from "@/lib/client-store";
import { Button } from "../ui/button";

export default function AddCard() {
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const params = useSearchParams();
  const id = Number(params.get("id"));
  const productId = params.get("productId");
  const title = params.get("title");
  const type = params.get("type");
  const price = Number(params.get("price"));
  const image = params.get("image");

  if (!id || !productId || !title || !type || !price || !image) {
    toast.error("Product not found");
    return redirect("/");
  }

  return (
    <>
      <div className="flex items-center gap-4 justify-stretch my-4">
        <Button
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
          variant={"secondary"}
          className="text-primary"
        >
          <Minus size={18} strokeWidth={3} />
        </Button>
        <Button className="flex-1">Quantity: {quantity}</Button>
        <Button
          onClick={() => {
            setQuantity(quantity + 1);
          }}
          variant={"secondary"}
          className="text-primary"
        >
          <Plus size={18} strokeWidth={3} />
        </Button>
      </div>
      <Button
        onClick={() => {
          toast.success(`Added ${title + " " + type} to your cart!`);
          addToCart({
            id: Number(productId),
            variant: { variantID: id, quantity },
            name: title + " " + type,
            price,
            image
          });
        }}
      >
        Add to cart
      </Button>
    </>
  );
}
