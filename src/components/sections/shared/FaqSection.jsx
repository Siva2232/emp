import { faqs } from "../../../data/site";
import Accordion from "../../ui/Accordion";
import Button from "../../ui/Button";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";

export default function FaqSection() {
  return (
    <section id="faq" className="section-pad relative border-t border-ink/8 bg-abyss">
      <div className="section-shell grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Questions"
              title="The things people ask before signing."
              lead="If yours is not here, send it over. We answer directly rather than routing you through a sales sequence."
            />
            <Reveal delay={0.2} className="mt-8">
              <Button to="/contact" variant="ghost">
                Ask us anything
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
