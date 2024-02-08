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
          className="relative flex flex-col items-center rounded-md bg-gray-400 p-3 pt-12"
        >
          <div className="flex flex-col items-center space-y-5">
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={104}
              className={cn("absolute -top-12 object-cover", item.position)}
            />
            <p className="text-sm font-semibold uppercase">{item.title}</p>
            <Link href={item.title} className="flex items-center">
              <span className="text-sm uppercase opacity-50">shop</span>
              <ChevronRight className="text-orange-800 ml-2 h-4 w-4" />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
