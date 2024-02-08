"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavItems } from "./nav-items";

export function NavMenu() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
        <span className="sr-only">Menu</span>
      </SheetTrigger>
      <SheetContent side={"top"} className="w-full bg-white md:top-24">
        <NavItems />
      </SheetContent>
    </Sheet>
  );
}
