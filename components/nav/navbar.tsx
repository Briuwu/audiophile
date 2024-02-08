import { ShoppingCart } from "lucide-react";
import { NavMenu } from "./nav-menu";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-5 border-b border-white-100 border-opacity-20 bg-black-900 px-6 py-9 text-white">
      <NavMenu />
      <Image
        src={"/assets/shared/desktop/logo.svg"}
        alt="audiophile logo"
        width={143}
        height={25}
      />
      <ShoppingCart />
    </nav>
  );
}
