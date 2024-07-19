"use client";

import { VariantsWithImagesTags } from "@/lib/infer-type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

type ProductVariantProps = {
  children: React.ReactNode;
  editMode: boolean;
  productID?: number;
  variant?: VariantsWithImagesTags;
};

export default function ProductVariant({
  children,
  editMode,
  productID,
  variant
}: ProductVariantProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
