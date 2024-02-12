import Image from "next/image";
import {
  showcase_earphones_yx1,
  showcase_speaker_zx7,
  showcase_speaker_zx9,
} from "@/lib/constants";
import { LinkButton } from "@/components/link-button";

export function ShowcaseSection() {
  return (
    <section className="grid gap-6">
      <div className="overflow-hidden rounded-xl bg-orange-800 bg-circle-pattern bg-[center_bottom_7rem] bg-no-repeat px-6 py-14 text-center text-white lg:flex lg:bg-[left_bottom_-15rem]">
        {showcase_speaker_zx9.map((item) => (
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            key={item.src}
            className={item.className}
          />
        ))}
        <div className="mx-auto max-w-96 lg:grid lg:place-content-center lg:text-left">
          <h2 className="mb-6 mt-8 text-4xl font-bold uppercase lg:text-6xl">
            zx9 <br /> speaker
          </h2>
          <p className="mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <LinkButton
            href={"/category/speakers/zx9-speaker"}
            className="bg-black-900 px-6 hover:bg-gray-400 hover:text-black lg:justify-self-start"
          >
            See product
          </LinkButton>
        </div>
      </div>
      <div className="stack">
        {showcase_speaker_zx7.map((item) => (
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            key={item.src}
            className={item.className}
          />
        ))}
        <div className="space-y-7 self-center px-6 lg:px-24">
          <h2 className="text-3xl font-bold uppercase">zx7 speaker</h2>
          <LinkButton
            href="/category/speakers/zx7-speaker"
            className="border border-black text-center hover:bg-black hover:text-white"
          >
            see product
          </LinkButton>
        </div>
      </div>
      <div className="grid gap-3 space-y-6 md:grid-cols-2">
        {showcase_earphones_yx1.map((item) => (
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            key={item.src}
            className={item.className}
          />
        ))}
        <div className="space-y-8 rounded-xl bg-gray-400 px-6 py-10 lg:grid lg:place-content-center">
          <h2 className="text-3xl font-bold uppercase">yx1 earphones</h2>
          <LinkButton
            href="/category/earphones/yx1-earphones"
            className="justify-self-start border border-black text-center hover:bg-black hover:text-white"
          >
            see product
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
