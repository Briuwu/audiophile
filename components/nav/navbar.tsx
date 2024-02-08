import { ChevronRight, Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavItems } from "./nav-items";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-5 border-b border-white-100 border-opacity-20 bg-black-900 px-6 py-9 text-white">
      <Sheet>
        <SheetTrigger>
          <Menu />
          <span className="sr-only">Menu</span>
        </SheetTrigger>
        <SheetContent className="w-full bg-white">
          <NavItems />
        </SheetContent>
      </Sheet>
      <h1 className="text-2xl font-bold md:mr-auto">audiophile</h1>
      <ShoppingCart />
    </nav>
  );
}
