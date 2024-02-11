import { Json } from "./lib/supabase/database.types";

export type Product = {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
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
  other_name: string;
};

export type OriginalProduct = Omit<Product, "images" | "order">;

export type IncludedItem = {
  quantity: number;
  item: string;
};
