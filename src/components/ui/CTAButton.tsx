import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200";
  const variants = {
    primary:
      "bg-azure hover:bg-cobalt text-white shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-midnight",
    white: "bg-white text-navy hover:bg-cloud shadow-lg hover:shadow-xl",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
