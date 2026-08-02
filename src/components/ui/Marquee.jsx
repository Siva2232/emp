import { cn } from "../../utils/helpers";

export default function Marquee({
  items,
  speed = "normal",
  separator = "\u2022",
  className,
  itemClassName,
}) {
  const loop = [...items, ...items];

  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        )}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "flex shrink-0 items-center gap-8 px-8 font-display text-xl text-mist sm:text-2xl",
              itemClassName
            )}
          >
            {item}
            <span aria-hidden="true" className="text-accent/40">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
