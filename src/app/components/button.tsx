import React from "react";

const Button = ({
  text,
  primary,
  secondary,
  classes,
  disabled,
  foreground,
  onClick,
  type,
}: {
  text: string | React.ReactElement;
  primary?: boolean;
  secondary?: boolean;
  classes?: string;
  disabled?: boolean;
  foreground?: boolean;
  onClick?: () => void;
  type?: "submit" | undefined;
}) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  shadow-sm ";

  const primaryVariant = primary
    ? "bg-primary text-primary-foreground  hover:bg-primary/90"
    : "";

  const secondaryVariant = secondary
    ? "bg-secondary text-secondary-foreground  hover:bg-secondary/80"
    : "";

  const foregroundVariant = foreground
    ? "bg-transparent hover:bg-accent hover:text-accent-foreground bg-transparent hover:bg-accent hover:text-accent-foreground"
    : "";

  const combinedClasses = `${baseClasses} ${primaryVariant} ${secondaryVariant} ${foregroundVariant} ${classes}`;

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
