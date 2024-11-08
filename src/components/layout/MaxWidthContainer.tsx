import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface containerProps {
  className?: string;
  children: ReactNode;
}

export const MaxWidthWrapper = ({ className, children }: containerProps) => {
  return (
    <div
      className={cn(
        "sm:max-w-[616px] md:max-w-[744px] lg:max-w-[984px] xl:max-w-[1152px] 2xl:max-w-[1284px] px-6 sm:px-3 mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
