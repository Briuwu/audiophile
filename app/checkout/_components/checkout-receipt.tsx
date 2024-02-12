"use client";
import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { ProductsInCart } from "@/types";
import { cn, convertNumber } from "@/lib/utils";
import { removeOrders } from "@/app/actions";

export function CheckoutReceipt({
  totalPrice,
  products,
}: {
  totalPrice: number;
  products: ProductsInCart[];
}) {
  const [isPending, startTransition] = useTransition();
  const [isMounted, setIsMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const singleProduct = products[0];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleBack = () => {
    startTransition(async () => {
      await removeOrders();
    });
  };

  return (
    <AlertDialog open>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent className="max-h-screen gap-0 overflow-y-scroll p-8 lg:max-w-xl lg:overflow-auto">
        <AlertDialogHeader>
          <Image
            src={"/assets/checkout/icon-order-confirmation.svg"}
            alt=""
            width={64}
            height={64}
            className="mb-6"
          />
          <AlertDialogTitle className="text-left text-2xl font-bold uppercase">
            Thank you for your order
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left opacity-75">
            You will receive an email confirmation shortly.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="md:my-9 md:grid md:grid-flow-col-dense">
          <div className="mt-6 space-y-3 rounded-lg rounded-b-none bg-gray-400 p-9 md:mt-0 md:rounded-lg md:rounded-r-none">
            <div className="flex items-center gap-4">
              <Image
                src={singleProduct.product_image}
                alt=""
                width={50}
                height={50}
              />
              <div className="font-bold">
                <p>{singleProduct.other_name}</p>
                <p className="opacity-75">
                  $ {convertNumber(singleProduct.price)}
                </p>
              </div>
              <p className="ml-auto font-bold opacity-75">
                x{singleProduct.quantity}
              </p>
            </div>
            {showAll &&
              products.slice(1).map((product) => (
                <div key={product.id} className="flex items-center gap-4">
                  <Image
                    src={product.product_image}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <div className="font-bold">
                    <p>{product.other_name}</p>
                    <p className="opacity-75">
                      $ {convertNumber(product.price)}
                    </p>
                  </div>
                  <p className="ml-auto font-bold opacity-75">
                    x{product.quantity}
                  </p>
                </div>
              ))}
            {products.length - 1 > 0 && (
              <>
                <hr className="mb-3" />
                <button
                  className="mx-auto block font-bold opacity-50 hover:underline"
                  onClick={() => setShowAll(!showAll)}
                >
                  {!showAll
                    ? `and ${products.length - 1} other item(s)`
                    : "View less"}
                </button>
              </>
            )}
          </div>
          <div
            className={cn(
              "mb-6 flex flex-col justify-center space-y-2 rounded-lg rounded-t-none bg-black p-9 text-white md:mb-0 md:rounded-lg md:rounded-l-none",
              showAll && "justify-end",
            )}
          >
            <p className="uppercase opacity-75">grand total</p>
            <p className="font-bold">$ {convertNumber(totalPrice)}</p>
          </div>
        </div>
        <AlertDialogFooter>
          <button
            disabled={isPending}
            onClick={handleBack}
            className="w-full bg-orange-800 p-4 text-center text-white"
          >
            Back to home
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
