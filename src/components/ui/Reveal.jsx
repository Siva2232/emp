import { motion } from "framer-motion";
import { easeLuxury, viewportOnce } from "../../utils/motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const offsets = {
  up: { y: 44, x: 0 },
  down: { y: -44, x: 0 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  direction = "up",
  as = "div",
  className,
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div;
  // Side slides expand the document width on mobile Safari — keep those vertical only
  const isNarrow = useMediaQuery("(max-width: 1023px)");
  const resolved =
    isNarrow && (direction === "left" || direction === "right") ? "up" : direction;
  const offset = offsets[resolved] ?? offsets.up;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration, delay, ease: easeLuxury }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
