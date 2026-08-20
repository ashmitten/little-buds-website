import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  optional?: boolean;
}

export function Label({
  className,
  children,
  optional,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "block font-display text-sm font-semibold text-primary",
        className,
      )}
      {...props}
    >
      {children}
      {optional && (
        <span className="ml-1 font-body text-xs font-normal text-muted">
          (optional)
        </span>
      )}
    </label>
  );
}
