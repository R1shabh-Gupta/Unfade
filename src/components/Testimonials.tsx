"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="my-20">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-5xl text-slate-800">
          See what our users say about us
        </h1>
        <p className="text-md text-slate-600">
          Our very own wall of love. Or complaints. Whatever you want to call
          it.
        </p>
      </div>
      <div className="h-[22rem] rounded-md flex flex-col antialiased grainy-light dark:grainy-dark dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-0">
        <InfiniteMovingCards
          items={testimonialsDetails}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonialsDetails = [
  {
    quote:
      "PhotoMagic transformed my old family photos into beautiful, clear images. It's like reliving those precious moments all over again.",
    name: "Emily Johnson",
    title: "",
  },
  {
    quote:
      "I couldn't believe the results! My faded pictures look brand new. PhotoMagic is truly magical!",
    name: "Michael Smith",
    title: "",
  },
  {
    quote:
      "Thanks to PhotoMagic, I can now see the details in my grandparents' wedding photos. This service is a blessing.",
    name: "Samantha Brown",
    title: "",
  },
  {
    quote:
      "PhotoMagic restored my childhood photos to their former glory. It's incredible how much detail and color they brought back.",
    name: "John Davis",
    title: "",
  },
  {
    quote:
      "The quality of the restored images is amazing. PhotoMagic is the best tool for preserving memories.",
    name: "Laura Wilson",
    title: "",
  },
];
