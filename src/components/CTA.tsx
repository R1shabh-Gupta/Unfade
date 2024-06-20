"use client";

import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function CTA() {
  return (
    <div className="h-[22rem] w-full rounded-3xl bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-4 mb-10">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Revive Your Memories
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-xl mx-auto my-4 text-sm text-center relative z-10">
          Transform your old, faded photos into high-quality images with our
          AI-powered restoration tool. Experience the magic of PhotoMagic and
          bring your cherished moments back to life. Click below to start
          restoring your photos now.
        </p>
        <div className="flex justify-center text-center mt-4">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className=" bg-black text-white  flex items-center space-x-2"
          >
            <Link href="/restore">Restore My Photos</Link>
          </HoverBorderGradient>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CTA;
