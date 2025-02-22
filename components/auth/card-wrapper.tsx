"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

type Props = Readonly<{
  children: React.ReactNode;
  headLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}>;

export const CardWrapper = ({
  children,
  headLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: Props) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};
