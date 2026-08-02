/**
 * CSS-3D stand-in for the WebGL hero scene, matching its composition.
 * Rendered on small screens and for reduced-motion visitors so neither has to
 * download the three.js bundle.
 */
export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center [perspective:1200px]"
    >
      <div className="absolute h-[19rem] w-[19rem] rounded-full border border-glow/25 [transform:rotateX(72deg)] sm:h-[24rem] sm:w-[24rem]" />

      <div className="animate-float relative h-[12rem] w-[18rem] [transform-style:preserve-3d] [transform:rotateX(9deg)_rotateY(-20deg)] sm:h-[14.5rem] sm:w-[22rem]">
        <div className="absolute inset-0 rounded-2xl border border-ink/8 bg-elevated shadow-lift [transform:translateZ(-72px)_translate(-30px,22px)]" />

        <div className="absolute inset-0 rounded-2xl bg-accent shadow-lift [transform:translateZ(-36px)_translate(-15px,11px)]" />

        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-ink/8 bg-white p-5 shadow-lift sm:p-6">
          <div className="h-2.5 w-16 rounded-full bg-accent" />
          <div className="mt-5 space-y-2.5">
            <div className="h-2 w-full rounded-full bg-elevated" />
            <div className="h-2 w-4/5 rounded-full bg-elevated" />
            <div className="h-2 w-3/5 rounded-full bg-elevated" />
          </div>
          <div className="mt-6 h-3.5 w-24 rounded-full bg-glow/70" />
        </div>

        <div className="absolute -right-6 -top-6 h-9 w-9 rotate-12 rounded-lg bg-accent-soft shadow-lift [transform:translateZ(60px)_rotate(12deg)]" />
        <div className="absolute -bottom-5 -left-5 h-5 w-5 rounded-full bg-glow shadow-lift [transform:translateZ(50px)]" />
      </div>
    </div>
  );
}
