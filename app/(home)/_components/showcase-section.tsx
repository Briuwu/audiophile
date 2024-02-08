import { LinkButton } from "@/components/link-button";
import Image from "next/image";
import Link from "next/link";

export function ShowcaseSection() {
  return (
    <div className="grid gap-6">
      <div className="rounded-xl bg-orange-800 bg-circle-pattern bg-cover bg-[center_bottom_7rem] bg-no-repeat px-6 py-14 text-center text-white">
        <Image
          src={"/assets/home/mobile/image-speaker-zx9.png"}
          alt=""
          width={320}
          height={388}
          className="mx-auto h-52 w-44"
        />
        <div className="mx-auto max-w-96">
          <h2 className="mb-6 mt-8 text-4xl font-bold uppercase">
            zx9 <br /> speaker
          </h2>
          <p className="mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <LinkButton href={"#"} className="bg-black-900">
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
          className="hidden w-full rounded-xl md:block"
        />
        <div className="space-y-7 self-center px-6">
          <h2 className="text-3xl font-bold uppercase">zx7 speaker</h2>
          <LinkButton href="#" className="border border-black">
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
          className="hidden w-full rounded-xl md:block"
        />
        <div className="space-y-8 rounded-xl bg-gray-400 px-6 py-10">
          <h2 className="text-3xl font-bold uppercase">yx1 earphones</h2>
          <LinkButton href="#" className="border border-black">
            see product
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
