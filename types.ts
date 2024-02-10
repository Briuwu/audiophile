import { Json } from "./lib/supabase/database.types";

export type Product = {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: "earphones" | "headphones" | "speakers";
  created_at: string;
  description: string;
  features: string;
  id: string;
  includes: Json;
  name: string;
  new: boolean;
  price: number;
  slug: string;
  order: boolean;
};

export type IncludedItem = {
  quantity: number;
  item: string;
};
