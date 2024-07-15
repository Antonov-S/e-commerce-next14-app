import { auth } from "@/server/auth";
import { ProductSchema, zProductSchema } from "@/types/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import ProductForm from "./product-form";

export default async function AddProduct() {
  const session = await auth();

  const form = useForm<zProductSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0
    }
  });

  if (session?.user.role !== "admin") return redirect("/dashboard/settings");

  return <ProductForm />;
}
