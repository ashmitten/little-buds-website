import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-11 w-full appearance-none rounded-lg border border-primary/15 bg-white px-4 font-body text-base text-foreground shadow-soft transition-colors focus-visible:border-brand-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/30 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
