import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg border border-primary/15 bg-white px-4 font-body text-base text-foreground shadow-soft transition-colors placeholder:text-muted/60 focus-visible:border-brand-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/30 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
