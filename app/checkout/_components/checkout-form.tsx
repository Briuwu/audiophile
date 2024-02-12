"use client";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import Image from "next/image";
import { convertNumber } from "@/lib/utils";
import { ProductsInCart } from "@/types";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const SHIPPING_FEE = 50;

const schema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
  street: z.string().min(3, {
    message: "Street is required",
  }),
  zip_code: z.string().min(3, {
    message: "ZIP Code is required",
  }),
  city: z.string().min(3, {
    message: "City is required",
  }),
  country: z.string().min(3, {
    message: "Country is required",
  }),
  payment: z.enum(["e-money", "cash"], {
    required_error: "Please select a payment method",
  }),
  e_money_number: z
    .string()
    .min(3, {
      message: "e-Money Number is required",
    })
    .optional(),
  e_money_pin: z
    .string()
    .min(3, {
      message: "e-Money PIN is required",
    })
    .optional(),
});

export default function CheckoutForm({
  products,
}: {
  products: ProductsInCart[];
}) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      street: "",
      zip_code: "",
      city: "",
      country: "",
      payment: "e-money",
      e_money_number: "",
      e_money_pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
  }

  const totalProductPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  // create the VAT fee 20% of product total price
  const VAT_FEE = (totalProductPrice * 20) / 100;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-8 lg:grid-flow-col-dense lg:items-start"
      >
        <div className="space-y-8 rounded-xl bg-white p-6">
          <h1 className="mb-8 text-3xl font-bold uppercase">Checkout</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-800 md:col-span-2">
              billing details
            </p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Alexei Ward"
                      className="rounded-md p-6 placeholder:font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="alexei@mail.com"
                      className="rounded-md p-6 placeholder:font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1 202-555-0136"
                      className="rounded-md p-6 placeholder:font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-800 md:col-span-2">
              shipping details
            </p>
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-bold">Your Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1137 Williams Avenue"
                      className="rounded-md p-6 placeholder:font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zip_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">ZIP Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10001"
                      className="rounded-md p-6 placeholder:font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">City</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="New York"
                      className="rounded-md p-6 placeholder:font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Country</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="United States"
                      className="rounded-md p-6 placeholder:font-bold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-800">
              payment details
            </p>
            <FormField
              control={form.control}
              name="payment"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="font-bold">Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-y-0 rounded-md">
                        <FormControl>
                          <RadioGroupItem
                            value="e-money"
                            className="peer hidden"
                          />
                        </FormControl>
                        <FormLabel className="m-0 w-full cursor-pointer rounded-md border p-4 font-normal shadow-sm hover:border-orange-400 peer-aria-checked:border-orange-800 peer-aria-checked:ring-1 peer-aria-checked:ring-orange-800">
                          e-Money
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-y-0 rounded-md">
                        <FormControl>
                          <RadioGroupItem
                            value="cash"
                            className="peer hidden"
                          />
                        </FormControl>
                        <FormLabel className="m-0 w-full cursor-pointer rounded-md border p-4 font-normal shadow-sm hover:border-orange-400 peer-aria-checked:border-orange-800 peer-aria-checked:ring-1 peer-aria-checked:ring-orange-800">
                          Cash on Delivery
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="md:col-span-2">
              {form.watch("payment") === "e-money" && (
                <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-4">
                  <FormField
                    control={form.control}
                    name="e_money_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          e-Money Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="238521993"
                            className="rounded-md p-6 placeholder:font-bold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="e_money_pin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">e-Money PIN</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="6891"
                            className="rounded-md p-6 placeholder:font-bold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-6">
          <h2 className="mb-8 text-lg font-bold uppercase">Summary</h2>
          <div className="space-y-6">
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
                <p className="ml-auto">x{product.quantity}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <p className="uppercase opacity-50">total</p>
              <p className="text-lg font-bold">
                $ {convertNumber(totalProductPrice)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="uppercase opacity-50">shipping</p>
              <p className="text-lg font-bold">$ {SHIPPING_FEE}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="uppercase opacity-50">vat (included)</p>
              <p className="text-lg font-bold">$ {convertNumber(VAT_FEE)}</p>
            </div>
            <div className="flex items-center justify-between pt-4">
              <p className="uppercase opacity-50">Grand total</p>
              <p className="text-lg font-bold text-orange-800">
                $ {convertNumber(totalProductPrice + SHIPPING_FEE)}
              </p>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="mt-8 w-full rounded-none bg-orange-800 font-bold uppercase"
          >
            Continue & pay
          </Button>
        </div>
      </form>
    </Form>
  );
}
