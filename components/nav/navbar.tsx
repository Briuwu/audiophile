import { NavMenu } from "./nav-menu";
import Image from "next/image";
import Link from "next/link";
import { DisplayCart } from "../cart/display-cart";
import { NavItemsDesktop } from "./nav-items-desktop";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50  bg-black text-white">
      <div
        className="container
       flex items-center justify-between gap-5 border-b border-white-100 border-opacity-20 px-6 py-9"
      >
        <div className="lg:hidden">
          <NavMenu />
        </div>
        <Link href={"/"}>
          <Image
            src={"/assets/shared/desktop/logo.svg"}
            alt="audiophile logo"
            width={143}
            height={25}
            className="md:mr-auto lg:m-0"
          />
          <span className="sr-only">audiophile</span>
        </Link>
        <NavItemsDesktop />
        <DisplayCart />
      </div>
    </nav>
  );
}
