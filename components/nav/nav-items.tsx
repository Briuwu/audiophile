import { navitem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NavItems() {
  return (
    <ul className="mt-16 space-y-16 md:grid md:grid-cols-3 md:gap-3 md:space-y-0">
      {navitem.map((item) => (
        <li
          key={item.title}
          className="group relative items-center rounded-md bg-gray-400"
        >
          <Link
            href={item.href}
            className="flex flex-col items-center space-y-5 p-3 pt-12"
          >
            <Image
              src={`/assets/shared/desktop/${item.image}`}
              alt={item.title}
              width={item.width}
              height={item.height}
              className={cn("absolute -top-8 w-36", item.position)}
            />
            <p className="text-sm font-semibold uppercase">{item.title}</p>
            <p className="flex items-center">
              <span className="text-sm uppercase opacity-50 group-hover:text-orange-800">
                shop
              </span>
              <ChevronRight className="ml-2 h-4 w-4 text-orange-800" />
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
