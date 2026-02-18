import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "default" | "sage" | "white";
}

export function Section({ children, className, id, bg = "default" }: SectionProps) {
  const bgStyles = {
    default: "bg-stone-50",
    sage: "bg-sage-50",
    white: "bg-white",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-20 md:py-28", 
        bgStyles[bg],
        className
      )}
    >
      {/* We added the container styles directly here */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}