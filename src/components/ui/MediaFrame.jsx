import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "../../hooks/useMediaQuery";

/**
 * Photographic frame with a scroll-linked parallax crop.
 * The image is intentionally taller than the frame so the vertical
 * drift never exposes an edge.
 */
export default function MediaFrame({
  src,
  srcSet,
  sizes,
  alt,
  ratio = "aspect-[16/10]",
  className = "",
  rounded = "rounded-[1.75rem]",
  parallax = true,
  tilt = false,
  priority = false,
  overlay = "soft",
  children,
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const hasPointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6.5%", "6.5%"]);
  const drift = parallax && !reduced;

  const frame = (
    <div
      ref={ref}
      className={`group relative overflow-hidden border border-ink/8 bg-surface shadow-lift ${rounded} ${ratio} ${className}`}
    >
      <motion.img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        style={drift ? { y } : undefined}
        className={`absolute -top-[7%] left-0 h-[114%] w-full object-cover transition-opacity duration-1000 ease-luxury ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/12 via-transparent to-glow/12 ${
          overlay === "none" ? "opacity-0" : "opacity-70"
        }`}
      />
      {overlay === "dark" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
      )}
      <div
        className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35 ${rounded}`}
      />

      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  );

  // Tilt is a pointer affordance; on touch it only competes with scrolling
  if (!tilt || reduced || !hasPointer) return frame;

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={7}
      perspective={1600}
      scale={1.01}
      transitionSpeed={1800}
      glareEnable
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="28px"
    >
      {frame}
    </Tilt>
  );
}
