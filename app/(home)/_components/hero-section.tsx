import { LinkButton } from "@/components/link-button";

export function HeroSection() {
  return (
    <div className="bg-black bg-hero bg-cover bg-bottom bg-no-repeat py-28 text-center text-white md:bg-hero-tablet md:py-36 lg:bg-hero-desktop lg:text-left">
      <div className="container">
        <p className="text-sm uppercase tracking-[.35em] opacity-50">
          new product
        </p>
        <p className="mb-6 mt-6 text-3xl font-bold uppercase md:text-6xl">
          xx99 mark ii
          <br /> headphones
        </p>
        <p className="mx-auto mb-7 max-w-80 opacity-75 md:hidden lg:m-0 lg:block lg:max-w-96">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <LinkButton
          href={"/category/headphones/xx99-mark-two-headphones"}
          className="bg-orange-800 md:mt-28"
        >
          See product
        </LinkButton>
      </div>
    </div>
  );
}
