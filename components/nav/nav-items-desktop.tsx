"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItemsDesktop() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Headphones",
      href: "headphones",
      active: pathname === "/category/headphones",
    },
    {
      title: "Speakers",
      href: "speakers",
      active: pathname === "/category/speakers",
    },
    {
      title: "Earphones",
      href: "earphones",
      active: pathname === "/category/earphones",
    },
  ];

  return (
    <ul className="hidden gap-9 font-bold lg:flex">
      <li>
        <Link
          href={"/"}
          className={cn(
            "uppercase hover:text-orange-800",
            pathname === "/" && "text-orange-800",
          )}
        >
          Home
        </Link>
      </li>
      {navItems.map((item) => (
        <li
          key={item.title}
          className={cn(
            "uppercase hover:text-orange-800",
            item.active && "text-orange-800",
          )}
        >
          <Link href={`/category/${item.href}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
