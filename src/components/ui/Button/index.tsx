import React from "react";
import { twMerge } from 'tailwind-merge'

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "lg" | "sm";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-500 text-neutral-900 hover:bg-primary-600 disabled:text-neutral-500",
  secondary:
    "border border-primary-500 bg-neutral-900 text-neutral-0 hover:bg-neutral-800 hover:border-primary-400 disabled:border-neutral-700 disabled:text-neutral-400 disabled:bg-neutral-700",
};

const sizeStyles: Record<ButtonSize, string> = {
  lg: "px-dm-32 py-dm-8",
  sm: "px-dm-24 py-dm-8",
};

const Button = ({
  children,
  variant = "primary",
  size = "sm",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "italic cursor-pointer inline-flex items-center justify-center rounded-full font-black uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:cursor-not-allowed disabled:opacity-40",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;