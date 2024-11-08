import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import { Navbar } from "./Navbar";
import { Button } from "../ui/button";
import Link from "next/link";
import images from "@/constants/images";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-5 text-white" />
      </SheetTrigger>
      <SheetContent className="bg-[#121212] border-none">
        <SheetHeader>
          <SheetTitle>&nbsp;</SheetTitle>
          <SheetDescription>&nbsp;</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center justify-between gap-8 py-8 text-white">
          <Image {...images.logo} />
          <ul className="flex flex-col gap-12">
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
          <Button className="flex capitalize items-center gap-2 rounded-full border-2 border-white">
            join us now
            <span className="size-6 rounded-full bg-orange-600 flex justify-center items-center">
              <ArrowRight className="size-5 text-black" />
            </span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
