import { best_gear_images, navitem } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "../socials/facebook-icon";
import { InstagramIcon } from "../socials/instagram-icon";
import { TwitterIcon } from "../socials/twitter-icon";

const socials = [
  {
    key: "facebook",
    icon: <FacebookIcon />,
    link: "#",
  },
  {
    key: "twitter",
    icon: <TwitterIcon />,
    link: "#",
  },
  {
    key: "instagram",
    icon: <InstagramIcon />,
    link: "#",
  },
];

export function Footer() {
  return (
    <footer className="mt-24 text-center">
      <div className="container mb-24 lg:flex lg:flex-row-reverse lg:items-center lg:text-left">
        {best_gear_images.map((item) => (
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            key={item.src}
            className={item.className}
          />
        ))}

        <div className="mx-auto max-w-xl lg:ml-0">
          <h3 className="mb-8 mt-10 text-3xl font-bold uppercase md:text-5xl">
            Bringing you the <span className="text-orange-800">best</span> audio
            gear
          </h3>
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
      <div className="bg-black pb-12 text-white">
        <div className="container grid space-y-12 md:grid-cols-2 md:text-left">
          <div className=" mx-auto h-1 w-28 bg-orange-800 md:ml-0" />
          <Image
            src={"/assets/shared/desktop/logo.svg"}
            alt="audiophile logo"
            width={143}
            height={25}
            className="mx-auto pt-12 md:col-span-2 md:ml-0 lg:col-start-1 lg:row-start-3"
          />
          <ul className="flex flex-col gap-4 font-bold uppercase md:col-span-2 md:flex-row md:gap-8 lg:col-span-2 lg:col-start-2 lg:row-start-3 lg:gap-9 lg:self-end lg:justify-self-end">
            <li className="hover:text-orange-800">
              <Link href={"/"}>home</Link>
            </li>
            {navitem.map((item) => (
              <li key={item.title} className="hover:text-orange-800">
                <Link href={`/category/${item.href}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <p className="opacity-75 md:col-span-2 lg:row-start-4 lg:max-w-xl">
            Audiophile is an all in one stop to fulfill your audio needs. We’re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="font-bold opacity-75 lg:row-start-5">
            Copyright 2024. All Rights Reserved. @Briuwu
          </p>
          <ul className="space-x-4 md:justify-self-end lg:row-start-4 lg:self-end">
            {socials.map((social) => (
              <li key={social.key} className="inline-block">
                <Link href={social.link}>
                  {social.icon} <span className="sr-only">{social.key}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
