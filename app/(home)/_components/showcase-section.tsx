import { LinkButton } from "@/components/link-button";
import Image from "next/image";
import Link from "next/link";

export function ShowcaseSection() {
  return (
    <div className="grid gap-6">
      <div className="overflow-hidden rounded-xl bg-orange-800 bg-circle-pattern bg-[center_bottom_7rem] bg-no-repeat px-6 py-14 text-center text-white lg:flex lg:bg-[left_bottom_-15rem]">
        <Image
          src={"/assets/home/mobile/image-speaker-zx9.png"}
          alt=""
          width={320}
          height={388}
          className="mx-auto h-52 w-44 md:hidden"
        />
        <Image
          src={"/assets/home/tablet/image-speaker-zx9.png"}
          alt=""
          width={366}
          height={444}
          className="mx-auto hidden w-44 md:block lg:hidden"
        />
        <Image
          src={"/assets/home/desktop/image-speaker-zx9.png"}
          alt=""
          width={756}
          height={918}
          className="mx-auto hidden w-96 translate-y-16 lg:block"
        />
        <div className="mx-auto max-w-96 lg:grid lg:place-content-center lg:text-left">
          <h2 className="mb-6 mt-8 text-4xl font-bold uppercase lg:text-6xl">
            zx9 <br /> speaker
          </h2>
          <p className="mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <LinkButton
            href={"#"}
            className="bg-black-900 px-6 hover:bg-gray-400 hover:text-black lg:justify-self-start"
          >
            See product
          </LinkButton>
        </div>
      </div>
      <div className="stack">
        <Image
          src={"/assets/home/mobile/image-speaker-zx7.jpg"}
          alt=""
          width={654}
          height={640}
          className="rounded-xl md:hidden"
        />
        <Image
          src={"/assets/home/tablet/image-speaker-zx7.jpg"}
          alt=""
          width={689}
          height={320}
          className="hidden w-full rounded-xl md:block lg:hidden"
        />
        <Image
          src={"/assets/home/desktop/image-speaker-zx7.jpg"}
          alt=""
          width={1110}
          height={320}
          className="hidden w-full rounded-xl lg:block"
        />
        <div className="space-y-7 self-center px-6 lg:px-24">
          <h2 className="text-3xl font-bold uppercase">zx7 speaker</h2>
          <LinkButton
            href="#"
            className="border border-black text-center hover:bg-black hover:text-white"
          >
            see product
          </LinkButton>
        </div>
      </div>
      <div className="grid gap-3 space-y-6 md:grid-cols-2">
        <Image
          src={"/assets/home/mobile/image-earphones-yx1.jpg"}
          alt=""
          width={654}
          height={400}
          className="rounded-xl md:hidden"
        />
        <Image
          src={"/assets/home/tablet/image-earphones-yx1.jpg"}
          alt=""
          width={678}
          height={640}
          className="hidden w-full rounded-xl md:block lg:hidden"
        />
        <Image
          src={"/assets/home/desktop/image-earphones-yx1.jpg"}
          alt=""
          width={540}
          height={320}
          className="hidden w-full rounded-xl lg:block"
        />
        <div className="space-y-8 rounded-xl bg-gray-400 px-6 py-10 lg:grid lg:place-content-center">
          <h2 className="text-3xl font-bold uppercase">yx1 earphones</h2>
          <LinkButton
            href="#"
            className="justify-self-start border border-black text-center hover:bg-black hover:text-white"
          >
            see product
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
