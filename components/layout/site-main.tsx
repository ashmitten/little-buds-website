import { ScrollMotif } from "@/components/home/scroll-motif";
import { cn } from "@/lib/utils";

interface SiteMainProps {
  children: React.ReactNode;
  className?: string;
  /** Use fewer gutter letters/flowers on shorter or busier pages */
  motifDensity?: "auto" | "sparse";
}

/**
 * Main content shell with gutter letter + flower motifs on xl+ viewports.
 */
export function SiteMain({
  children,
  className,
  motifDensity = "auto",
}: SiteMainProps) {
  return (
    <main className={cn("home-scroll relative", className)}>
      <div className="home-scroll-content relative">
        <ScrollMotif density={motifDensity} />
        {children}
      </div>
    </main>
  );
}
