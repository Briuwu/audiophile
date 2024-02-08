import { LinkButton } from "@/components/link-button";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="md:bg-hero-tablet bg-black bg-hero bg-cover bg-bottom bg-no-repeat py-28 text-center text-white md:py-36">
      <p className="text-sm uppercase tracking-[.35em] opacity-50">
        new product
      </p>
      <p className="mt-6 text-3xl font-bold uppercase md:text-6xl">
        xx99 mark ii
        <br /> headphones
      </p>
      <p className="mx-auto max-w-80 opacity-75 md:hidden">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <LinkButton href={"#"} className="bg-orange-800 md:mt-28">
        See product
      </LinkButton>
    </div>
  );
}
