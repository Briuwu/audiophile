import { Menu, ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <nav className="py-9 px-6 flex justify-between bg-black-900 text-white">
      <Menu />
      <h1 className="text-2xl font-bold">audiophile</h1>
      <ShoppingCart />
    </nav>
  );
}
