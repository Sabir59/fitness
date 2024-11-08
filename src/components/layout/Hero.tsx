import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight, CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import images from "@/constants/images";

export const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-12 place-items-center">
      {/* <Image
        {...images.heroShape}
        className="h-full absolute top-0 right-0 z-10 opacity-45 w-[60vw] ml-auto"
      /> */}
      <div className="relative z-20">
        {/* Text */}
        <div className="flex flex-col gap-7 max-w-[563px]">
          <h1 className="text-6xl font-bold text-white uppercase leading-[80px]">
            Build Your{" "}
            <span className="text-yellow-500 font-extrabold">Body Shapes</span>{" "}
            With
            <span className="text-yellow-500 font-extrabold"> Fitness</span>
          </h1>
          <p className="leading-[35px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            faucibus interdum nunc, et eleifend neque sagittis et. Donec
            dignissim quam eu aliquet fermentum. Suspendisse potenti.
          </p>
        </div>
        <div className="mt-12 flex items-center gap-9">
          <Button className="hidden lg:flex capitalize items-center gap-2 rounded-full border-2 border-white bg-orange-600">
            Get Started
            <span className="size-6 rounded-full bg-black flex justify-center items-center">
              <ArrowRight className="size-5 text-white" />
            </span>
          </Button>
          <div className="relative flex items-center text-2xl text-white gap-2">
            <div className="relative w-16 h-16">
              <Image {...images.iconWatch} />
              <span className="size-6 rounded-full bg-black flex justify-center items-center absolute right-0 bottom-0">
                <ChevronRight className="size-5 text-orange-600" />
              </span>
            </div>
            <span className="">Watch Our Fitness</span>
          </div>
        </div>
      </div>
      {/* Photo */}
      <Image {...images.heroImage} className="relasive z-20" />
    </section>
  );
};
