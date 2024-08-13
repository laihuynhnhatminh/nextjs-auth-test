"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

type Props = Readonly<{
  href: string;
  label: string;
}>;

export const BackButton = ({ href, label }: Props) => {
  return (
    <Button className="font-normal w-full" variant="link" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
