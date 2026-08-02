import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/helpers";

const variants = {
  primary:
    "bg-accent text-white shadow-glow hover:bg-accent-deep hover:shadow-[0_24px_60px_-18px_rgba(91,75,219,0.6)]",
  ghost: "border border-ink/12 bg-white text-chalk hover:border-accent/40 hover:bg-abyss",
  dark: "bg-chalk text-void hover:bg-ink",
  quiet: "text-mist hover:text-chalk",
};

const sizes = {
  sm: "px-4 py-2 text-[12px]",
  md: "px-6 py-3 text-[13px]",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  withArrow = true,
  className,
  ...props
}) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.02em]",
    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    sizes[size],
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {inner}
    </button>
  );
}
