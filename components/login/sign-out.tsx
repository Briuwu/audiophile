"use client";
import { useRouter } from "next/navigation";
import createSupabaseBrowserClient from "@/lib/supabase/client";
import { Button } from "../ui/button";

export function SignOut() {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        const supabase = createSupabaseBrowserClient();
        await supabase.auth.signOut();
        router.refresh();
      }}
      variant={"link"}
      className="text-white"
    >
      Sign Out
    </Button>
  );
}
