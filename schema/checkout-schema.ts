import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const checkoutSchema = z.object({
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
  e_money_number: z.string().optional(),
  e_money_pin: z.string().optional(),
});
