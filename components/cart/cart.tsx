import { ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export function Cart() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ShoppingCart />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="m-4 p-7">
        <div className="flex items-center justify-between gap-28">
          <p className="font-bold uppercase">Cart (1)</p>
          <Button variant={"link"} className="p-0">
            Remove all
          </Button>
        </div>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
