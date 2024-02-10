import { Button } from "@/components/ui/button";
import React from "react";

export function AddToCart() {
  return (
    <div className="grid max-w-80 grid-flow-col-dense gap-4">
      <div className="grid grid-cols-3 place-items-center items-center bg-gray-400">
        <Button variant={"ghost"} className="p-3">
          -
        </Button>
        <span className="p-3">1</span>
        <Button variant={"ghost"} className="p-3">
          +
        </Button>
      </div>
      <Button className="h-full rounded bg-orange-800 uppercase hover:bg-orange-400">
        Add to cart
      </Button>
    </div>
  );
}
