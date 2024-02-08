import { navitem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CategorySection() {
  return (
    <ul className="mt-16 space-y-16 md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
      {navitem.map((item) => (
        <li
          key={item.title}
          className="relative flex flex-col items-center rounded-md bg-gray-400 p-5 pt-12"
        >
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={104}
              className={cn("absolute", item.position)}
            />
            <p className="text-sm font-semibold uppercase">{item.title}</p>
            <Link href={item.href} className="flex items-center">
              <span className="text-sm font-semibold uppercase opacity-50">
                shop
              </span>
              <ChevronRight className="ml-2 h-4 w-4 text-orange-800" />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
