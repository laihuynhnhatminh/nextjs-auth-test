"use client";

import { useRouter } from "next/navigation";

type Props = Readonly<{
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}>;

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>To do: Need implement</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
