import { LogIn } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LoginForm from "./login-form";

export function LoginDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <LogIn />
        <span className="sr-only">Log in</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="m-6 p-4">
        <LoginForm />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
