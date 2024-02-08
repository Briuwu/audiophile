import { cn } from "@/lib/utils";
import Link from "next/link";

export function LinkButton({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block p-4 text-sm font-semibold uppercase tracking-widest",
        className,
      )}
    >
      {children}
    </Link>
  );
}
