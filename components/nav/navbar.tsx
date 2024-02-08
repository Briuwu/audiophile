import { ShoppingCart } from "lucide-react";
import { NavMenu } from "./nav-menu";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Headphones", href: "/headphones" },
  { title: "Speakers", href: "/speakers" },
  { title: "Earphones", href: "/earphones" },
];

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
        <Image
          src={"/assets/shared/desktop/logo.svg"}
          alt="audiophile logo"
          width={143}
          height={25}
          className="md:mr-auto lg:m-0"
        />
        <ul className="hidden gap-9 font-bold lg:flex">
          {navItems.map((item) => (
            <li key={item.title} className="hover:text-orange-800">
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ShoppingCart />
      </div>
    </nav>
  );
}
