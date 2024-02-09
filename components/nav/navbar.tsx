"use client";
import { ShoppingCart } from "lucide-react";
import { NavMenu } from "./nav-menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { title: "Home", href: "/", active: pathname === "/" },
    {
      title: "Headphones",
      href: "/headphones",
      active: pathname === "/headphones",
    },
    { title: "Speakers", href: "/speakers", active: pathname === "/speakers" },
    {
      title: "Earphones",
      href: "/earphones",
      active: pathname === "/earphones",
    },
  ];

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
        <ul className="hidden gap-9 font-bold lg:flex">
          {navItems.map((item) => (
            <li
              key={item.title}
              className={cn(
                "uppercase hover:text-orange-800",
                item.active && "text-orange-800",
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ShoppingCart />
      </div>
    </nav>
  );
}
