import { cn } from "../../utils/helpers";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  children,
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          <span className="h-1 w-1 rounded-full bg-accent-soft" />
          {eyebrow}
        </Reveal>
      )}

      <Reveal as="h2" delay={0.08} className="display-lg mt-5 max-w-4xl text-chalk">
        {title}
      </Reveal>

      {lead && (
        <Reveal as="p" delay={0.16} className={cn("body-lg mt-6 max-w-2xl", centered && "mx-auto")}>
          {lead}
        </Reveal>
      )}

      {children}
    </div>
  );
}
