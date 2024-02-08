import { navitem } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="mt-24 text-center">
      <div className="container mb-24">
        <Image
          src={"/assets/shared/mobile/image-best-gear.jpg"}
          alt=""
          width={654}
          height={600}
          className="mx-auto rounded-xl md:hidden"
        />
        <Image
          src={"/assets/shared/tablet/image-best-gear.jpg"}
          alt=""
          width={1378}
          height={600}
          className="mx-auto hidden rounded-xl md:block"
        />
        <div className="mx-auto max-w-xl">
          <p className="mb-8 mt-10 text-3xl font-bold uppercase md:text-5xl">
            Bringing you the <span className="text-orange-800">best</span> audio
            gear
          </p>
          <p className="opacity-75">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <footer className="bg-black pb-12 text-white">
        <div className="container space-y-12 md:text-left">
          <div className=" mx-auto h-1 w-28 bg-orange-800 md:ml-0" />
          <Image
            src={"/assets/shared/desktop/logo.svg"}
            alt="audiophile logo"
            width={143}
            height={25}
            className="mx-auto pt-12 md:ml-0"
          />
          <ul className="flex flex-col gap-4 font-bold uppercase md:flex-row md:gap-8">
            <li>
              <Link href={"/"}>home</Link>
            </li>
            {navitem.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <p className="opacity-75">
            Audiophile is an all in one stop to fulfill your audio needs. We’re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <p className="font-bold opacity-75">
              Copyright 2024. All Rights Reserved. @Briuwu
            </p>
            <div>
              <Image
                src={"/assets/shared/desktop/icon-facebook.svg"}
                alt="facebook"
                width={24}
                height={24}
                className="mx-2 inline-block"
              />
              <Image
                src={"/assets/shared/desktop/icon-twitter.svg"}
                alt="twitter"
                width={24}
                height={24}
                className="mx-2 inline-block"
              />
              <Image
                src={"/assets/shared/desktop/icon-instagram.svg"}
                alt="instagram"
                width={24}
                height={24}
                className="mx-2 inline-block"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
