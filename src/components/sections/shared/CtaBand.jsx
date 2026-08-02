import { contact } from "../../../data/site";
import { telHref } from "../../../utils/helpers";
import Backdrop from "../../ui/Backdrop";
import Button from "../../ui/Button";
import Magnetic from "../../ui/Magnetic";
import Reveal from "../../ui/Reveal";

export default function CtaBand({
  eyebrow = "Next step",
  title = "Tell us what you are trying to build.",
  lead = "One call, no pitch deck. We will tell you what it takes, what it costs, and whether we are the right team for it.",
}) {
  return (
    <section className="grain relative overflow-hidden border-t border-ink/8 py-20 sm:py-24 md:py-32">
      <Backdrop variant="band" />

      <div className="section-shell relative z-10 flex flex-col items-center text-center">
        <Reveal as="p" className="eyebrow">
          <span className="h-1 w-1 rounded-full bg-accent-soft" />
          {eyebrow}
        </Reveal>

        <Reveal as="h2" delay={0.08} className="display-lg mt-6 max-w-3xl text-chalk">
          {title}
        </Reveal>

        <Reveal as="p" delay={0.16} className="body-lg mt-6 max-w-xl">
          {lead}
        </Reveal>

        <Reveal delay={0.24} className="mt-9 w-full sm:mt-10 sm:w-auto">
          <Magnetic strength={0.18}>
            <Button to="/contact" size="lg" className="w-full sm:w-auto">
              Book a free consultation
            </Button>
          </Magnetic>
        </Reveal>

        <Reveal
          as="p"
          delay={0.3}
          className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-dim"
        >
          or call{" "}
          <a href={telHref(contact.sales)} className="text-mist transition-colors hover:text-chalk">
            {contact.sales}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
