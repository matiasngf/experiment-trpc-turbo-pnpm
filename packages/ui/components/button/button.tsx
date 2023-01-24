import React from "react";
import clsx from "clsx";

const baseButtonCss = "px-4 py-2 rounded-md";

const buttonColorVariantsCss = {
  primary: "bg-blue-800 text-white",
  primaryOutline: "border border-blue-800 text-blue-800",
  secondary: "bg-gray-600 text-white",
  secondaryOutline: "border border-gray-300 text-gray-600",
  success: "bg-green-600 text-white",
  successOutline: "border border-green-600 text-green-600",
  danger: "bg-red-600 text-white",
  dangerOutline: "border border-red-600 text-red-600",
} as const;

export interface ButtonProps {
  variant?: keyof typeof buttonColorVariantsCss;
  className?: string;
}

export const Button = ({
  variant = "primary",
  className,
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  const variantStyles = buttonColorVariantsCss[variant];
  return (
    <button className={clsx(baseButtonCss, variantStyles, className)}>
      {children}
    </button>
  );
};
