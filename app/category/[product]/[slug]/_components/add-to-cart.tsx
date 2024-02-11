"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { User } from "@supabase/supabase-js";

import { Button } from "@/components/ui/button";

export function AddToCart({
  productId,
  user,
}: {
  productId: string;
  user: User | null;
}) {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login to add to cart");
      return;
    }
    toast.success("Added to cart");
    setQuantity(1);
  };

  return (
    <div className="grid max-w-80 grid-flow-col-dense gap-4">
      <div className="grid grid-cols-3 place-items-center items-center bg-gray-400">
        <Button variant={"ghost"} className="p-3" onClick={handleMinus}>
          -
        </Button>
        <span className="p-3">{quantity}</span>
        <Button variant={"ghost"} className="p-3" onClick={handlePlus}>
          +
        </Button>
      </div>
      <Button
        className="h-full rounded bg-orange-800 uppercase hover:bg-orange-400"
        onClick={handleAddToCart}
      >
        Add to cart
      </Button>
    </div>
  );
}
