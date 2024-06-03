import { ReactNode } from "react";

type cardProps = {
  children: ReactNode;
  hoverEffect?: boolean;
  classes?: string;
};

const Card = ({ children, hoverEffect, classes = "" }: cardProps) => {
  const baseClasses =
    "bg-card text-card-foreground relative overflow-hidden rounded-xl border border-gray-800  bg-gradient-to-r from-black to-neutral-950 shadow-2xl";

  const hoverClasses = hoverEffect
    ? "hover:scale-105 hover:border-black hover:shadow-lg"
    : "";

  const combinedClasses = `${baseClasses} ${hoverClasses} ${classes}`;

  return <div className={combinedClasses}>{children}</div>;
};

export default Card;
