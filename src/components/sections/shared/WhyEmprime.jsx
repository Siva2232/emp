import { differentiators } from "../../../data/site";
import Backdrop from "../../ui/Backdrop";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";

export default function WhyEmprime() {
  return (
    <section className="section-pad relative overflow-hidden border-y border-ink/8 bg-abyss">
      <Backdrop variant="soft" className="opacity-70" />

      <div className="section-shell relative z-10">
        <SectionHeading
          eyebrow="Why Emprime"
          title="Young company. Grown-up engineering habits."
          lead="We are honest about being a startup — and equally honest that it works in your favour. You get senior attention, faster decisions and none of the agency overhead."
          align="center"
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:mt-16 sm:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className="group relative bg-void p-7 transition-colors duration-500 hover:bg-surface sm:p-8 md:p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.03] text-accent-soft transition-all duration-500 group-hover:border-accent/40 group-hover:text-glow">
                <item.icon size={20} strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-chalk">{item.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mist">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
