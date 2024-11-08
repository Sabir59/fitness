"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Hero, Navbar } from "@/components/layout";
import { MaxWidthWrapper } from "@/components/layout/MaxWidthContainer";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="min-h-screen flex flex-col bg-[#1E1E1E]">
      <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen absolute top-0 left-0 w-full z-30"></div>
      <MaxWidthWrapper className="relative z-40 bg-transparent">
        <Navbar />
        <Hero />
      </MaxWidthWrapper>
    </main>
  );
}
