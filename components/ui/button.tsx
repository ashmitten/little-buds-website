import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-display font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 max-lg:h-10 max-lg:min-h-10 max-lg:px-3 max-lg:text-sm",
  {
    variants: {
      variant: {
        /** Primary admission/action CTA — coral */
        action:
          "bg-action text-action-foreground hover:bg-action/90 shadow-soft",
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
        secondary:
          "bg-brand-sky text-white hover:bg-brand-sky/90 shadow-soft",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/5",
        ghost: "bg-transparent text-primary hover:bg-primary/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-12 px-8 text-lg",
        xl: "h-14 px-10 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
