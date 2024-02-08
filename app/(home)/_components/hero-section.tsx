import { LinkButton } from "@/components/link-button";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="bg-hero space-y-5 bg-black-900 bg-cover bg-bottom bg-no-repeat py-28 text-center text-white">
      <p className="text-sm uppercase tracking-[.35em] opacity-50">
        new product
      </p>
      <p className="text-3xl font-bold uppercase">
        xx99 mark ii
        <br /> headphones
      </p>
      <p className="mx-auto max-w-80 opacity-75">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <LinkButton href={"#"} className="bg-orange-800">
        See product
      </LinkButton>
    </div>
  );
}
