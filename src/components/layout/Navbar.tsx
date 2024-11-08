import images from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-8 py-8 text-white">
      <Image {...images.logo} />
      <ul className="hidden lg:flex items-center gap-12">
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Trainers</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">Success Story</Link>
        </li>
      </ul>
      <Button className="hidden lg:flex capitalize items-center gap-2 rounded-full border-2 border-white">
        join us now
        <span className="size-6 rounded-full bg-orange-600 flex justify-center items-center">
          <ArrowRight className="size-5 text-black" />
        </span>
      </Button>
      <div className="block lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};
