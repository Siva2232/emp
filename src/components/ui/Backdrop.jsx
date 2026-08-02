import { cn } from "../../utils/helpers";

/** Decorative gradient bloom + grid used behind hero and CTA areas. */
export default function Backdrop({ variant = "hero", className }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="grid-lines mask-fade-b absolute inset-0 opacity-70" />

      {variant === "hero" && (
        <>
          <div className="absolute -left-48 top-[-18%] h-[42rem] w-[42rem] rounded-full bg-accent/12 blur-[150px]" />
          <div className="absolute -right-40 top-[10%] h-[34rem] w-[34rem] rounded-full bg-glow/10 blur-[150px]" />
          <div className="absolute bottom-[-25%] left-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-soft/8 blur-[160px]" />
        </>
      )}

      {variant === "soft" && (
        <>
          <div className="absolute -right-48 top-1/4 h-[34rem] w-[34rem] rounded-full bg-accent/8 blur-[160px]" />
          <div className="absolute -left-48 bottom-0 h-[28rem] w-[28rem] rounded-full bg-glow/6 blur-[160px]" />
        </>
      )}

      {variant === "band" && (
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[70rem] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[170px]" />
      )}
    </div>
  );
}
