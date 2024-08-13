import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type Props = Readonly<{
  label: string;
}>;

export const Header = ({ label }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font)}>🔐 Auth</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
