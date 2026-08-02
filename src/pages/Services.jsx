import { Check, Clock, Wallet } from "lucide-react";
import { services } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import { useHashScroll } from "../hooks/useHashScroll";
import { cn } from "../utils/helpers";
import Button from "../components/ui/Button";
import DeviceMock from "../components/ui/DeviceMock";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ServiceNav from "../components/sections/services/ServiceNav";
import ProcessTimeline from "../components/sections/shared/ProcessTimeline";
import FaqSection from "../components/sections/shared/FaqSection";
import CtaBand from "../components/sections/shared/CtaBand";

export default function Services() {
  useSeo({
    title: "Services — Web, Mobile, Custom Software, POS & ERP | Emprime",
    description:
      "Website development, mobile apps, custom software, POS systems and ERP platforms — scoped in phases and built to be handed over.",
  });
  useHashScroll();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five capabilities. One team that owns the outcome."
        lead="No handoffs between agencies, no gaps between design and engineering. The same people scope it, build it and support it after launch."
        meta={[
          { value: "5", label: "Capabilities" },
          { value: "3–16 wks", label: "Typical delivery" },
          { value: "Phase-wise", label: "Pricing model" },
        ]}
      />

      <ServiceNav />

      <div>
        {services.map((service, i) => {
          const flipped = i % 2 === 1;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className={cn(
                "relative w-full overflow-x-clip border-b border-ink/8 py-16 [scroll-margin-top:7.5rem] sm:py-20 md:py-28 md:[scroll-margin-top:9rem]",
                flipped && "bg-abyss"
              )}
            >
              <div className="section-shell">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <div
                    className={cn(
                      "lg:col-span-5",
                      flipped && "lg:order-2 lg:col-start-8"
                    )}
                  >
                    <Reveal className="flex items-end gap-4">
                      <span className="text-outline font-display text-[2.8rem] font-semibold leading-[0.8] sm:text-[3.4rem]">
                        0{i + 1}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-white text-accent shadow-card sm:h-12 sm:w-12">
                        <service.icon size={21} strokeWidth={1.6} />
                      </span>
                    </Reveal>

                    <Reveal as="h2" delay={0.08} className="display-md mt-6 text-chalk">
                      {service.title}
                    </Reveal>

                    <Reveal
                      as="p"
                      delay={0.14}
                      className="mt-5 text-[16px] leading-relaxed text-mist sm:text-[17px]"
                    >
                      {service.description}
                    </Reveal>

                    <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-[12px] text-chalk shadow-card">
                        <Clock size={13} strokeWidth={1.8} className="text-accent" />
                        {service.timeline}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-[12px] text-chalk shadow-card">
                        <Wallet size={13} strokeWidth={1.8} className="text-accent" />
                        Fixed price per phase
                      </span>
                    </Reveal>

                    <Reveal delay={0.26} className="mt-8 border-l-2 border-accent/40 pl-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-dim">
                        Best for
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-chalk">
                        {service.bestFor}
                      </p>
                    </Reveal>

                    <Reveal delay={0.32} className="mt-9">
                      <Button to="/contact" variant="ghost" size="sm" className="max-w-full">
                        Discuss this project
                      </Button>
                    </Reveal>
                  </div>

                  <div
                    className={cn(
                      "lg:col-span-6 lg:col-start-7",
                      flipped && "lg:order-1 lg:col-start-1"
                    )}
                  >
                    <Reveal
                      delay={0.12}
                      direction={flipped ? "right" : "left"}
                      className="overflow-x-clip px-0 sm:px-4 lg:px-0"
                    >
                      <DeviceMock variant={service.visual} />
                    </Reveal>
                  </div>
                </div>

                <div className="mt-12 grid gap-9 border-t border-ink/8 pt-9 sm:mt-16 sm:gap-10 sm:pt-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-7">
                    <Reveal
                      as="p"
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent"
                    >
                      What you get
                    </Reveal>
                    <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      {service.deliverables.map((item, index) => (
                        <Reveal
                          as="li"
                          key={item}
                          delay={index * 0.05}
                          className="flex gap-3.5"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                            <Check size={12} strokeWidth={2.6} />
                          </span>
                          <span className="text-[15px] leading-relaxed text-mist">{item}</span>
                        </Reveal>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 lg:col-start-9">
                    <Reveal
                      as="p"
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-dim"
                    >
                      Typical stack
                    </Reveal>
                    <Reveal delay={0.08} className="mt-6 flex flex-wrap gap-2">
                      {service.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-[12px] text-mist shadow-card"
                        >
                          {tech}
                        </span>
                      ))}
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <ProcessTimeline />
      <FaqSection />
      <CtaBand
        eyebrow="Not sure which one you need"
        title="Describe the problem. We will tell you what it actually needs."
        lead="Plenty of clients arrive asking for an app and leave with a much cheaper fix. That conversation is free."
      />
    </>
  );
}
