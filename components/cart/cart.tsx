"use client";
import { ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Product, ProductsInCart } from "@/types";
import Image from "next/image";
import { cn, convertNumber } from "@/lib/utils";
import createSupabaseBrowserClient from "@/lib/supabase/client";
import { toast } from "sonner";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LinkButton } from "../link-button";

interface CartProps {
  products: ProductsInCart[];
  user: User | null;
}

export function Cart({ products, user }: CartProps) {
  const [isPending, startTransition] = useTransition();
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  const handleRemoveAll = () => {
    startTransition(async () => {
      const { data: cart, error } = await supabase
        .from("cart")
        .delete()
        .eq("user_id", user?.id!);

      if (error) {
        toast.error("Error removing items from cart");
      } else {
        toast.success("Cart cleared");
        router.refresh();
      }
    });
  };

  const handleMinusQuantity = (productId: string, quantity: number) => {
    startTransition(async () => {
      const { data: cart, error } = await supabase
        .from("cart")
        .update({ quantity: quantity - 1 })
        .eq("product_id", productId)
        .select("quantity");

      if (error) {
        toast.error("Error removing items from cart");
      }

      if (cart?.[0].quantity === 0) {
        await supabase.from("cart").delete().eq("product_id", productId);
        toast.success("Item removed from cart");
      }

      router.refresh();
    });
  };

  const handlePlusQuantity = (productId: string, quantity: number) => {
    if (quantity === 5) {
      toast.error("You can only add 5 items at a time");
      return;
    }

    startTransition(async () => {
      const { data: cart, error } = await supabase
        .from("cart")
        .update({ quantity: quantity + 1 })
        .eq("product_id", productId)
        .select("quantity");

      if (error) {
        toast.error("Error adding items to cart");
      }

      router.refresh();
    });
  };

  const totalCartPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative">
          <ShoppingCart />
          {products.length > 0 && (
            <span className="absolute -right-2 -top-2 block aspect-square w-5 rounded-full bg-orange-800 text-sm">
              {products.length}
            </span>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="m-4 p-7">
        <div className="flex items-center justify-between gap-28">
          <p className="font-bold uppercase">Cart ({products.length})</p>
          <Button
            variant={"link"}
            className="p-0"
            onClick={handleRemoveAll}
            disabled={isPending || products.length === 0}
          >
            Remove all
          </Button>
        </div>
        <DropdownMenuSeparator className="mb-4" />
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center gap-4">
              <Image
                src={product.product_image}
                alt={product.name}
                height={64}
                width={64}
                className="rounded"
              />
              <div className="flex flex-col text-sm">
                <p className="font-bold uppercase">{product.other_name}</p>
                <p>$ {convertNumber(product.price)}</p>
              </div>
              <div className="ml-auto bg-gray-400">
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    handleMinusQuantity(product.id, product.quantity)
                  }
                  disabled={isPending}
                >
                  -
                </Button>
                <span>{product.quantity}</span>
                <Button
                  variant={"ghost"}
                  disabled={isPending}
                  onClick={() =>
                    handlePlusQuantity(product.id, product.quantity)
                  }
                >
                  +
                </Button>
              </div>
            </div>
          ))}
          {products.length > 0 && (
            <>
              <div className="flex items-center justify-between">
                <p className="uppercase opacity-75">Total</p>
                <p className="font-bold">$ {convertNumber(totalCartPrice)}</p>
              </div>
              <LinkButton
                href="/checkout"
                className={cn(
                  "w-full bg-orange-800 text-center text-white hover:bg-orange-400",
                  isPending && "pointer-events-none opacity-50",
                )}
              >
                Checkout
              </LinkButton>
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
