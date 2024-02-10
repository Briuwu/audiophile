import Link from "next/link";

export default function NotFound() {
  return (
    <div className="my-28 space-y-6 text-center">
      <h2 className="text-5xl font-bold uppercase text-destructive">
        Not Found
      </h2>
      <p className="text-xl font-semibold uppercase">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="inline-block rounded border bg-destructive p-4 font-semibold text-white hover:bg-destructive-foreground hover:text-black"
      >
        Return Home
      </Link>
    </div>
  );
}
