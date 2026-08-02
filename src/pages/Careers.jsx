import { ArrowUpRight, Briefcase, Check, Clock, Inbox, MapPin } from "lucide-react";
import { contact, openings, perks, team, values } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import Button from "../components/ui/Button";
import MediaFrame from "../components/ui/MediaFrame";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import CtaBand from "../components/sections/shared/CtaBand";

const hiringSteps = [
  {
    title: "A real conversation",
    body: "Thirty minutes about what you have built and what you want to build next. No aptitude tests.",
  },
  {
    title: "A paid take-home",
    body: "A small, scoped task close to actual work here. We pay for your time and give written feedback either way.",
  },
  {
    title: "Pairing session",
    body: "Two hours building something together, because that is what the job is.",
  },
  {
    title: "Offer within a week",
    body: "Clear pay band, clear scope, clear start date. We do not negotiate against other candidates.",
  },
];

function OpeningsList() {
  return (
    <>
      <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8">
        {openings.map((role, i) => (
          <Reveal
            key={role.title}
            delay={i * 0.06}
            className="group bg-void transition-colors duration-500 hover:bg-surface"
          >
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(
                `Application — ${role.title}`
              )}`}
              className="grid gap-5 p-7 md:grid-cols-12 md:items-center md:gap-8 md:p-9"
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-semibold text-chalk">{role.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-dim">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase size={12} strokeWidth={1.8} />
                    {role.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} strokeWidth={1.8} />
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} strokeWidth={1.8} />
                    {role.experience}
                  </span>
                </div>
              </div>

              <p className="text-[14px] leading-relaxed text-mist md:col-span-7">{role.blurb}</p>

              <div className="md:col-span-1 md:justify-self-end">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-chalk">
                  Apply
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                    className="text-accent-soft transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-4">
        <p className="text-[14px] text-mist">Nothing matching your skills?</p>
        <Button
          href={`mailto:${contact.email}?subject=${encodeURIComponent(
            "Speculative application"
          )}`}
          variant="ghost"
          size="sm"
        >
          Send a speculative application
        </Button>
      </Reveal>
    </>
  );
}

export default function Careers() {
  useSeo({
    title: "Careers at Emprime — Engineering and design in Kochi",
    description:
      "No roles are open right now, but we hire in bursts and read every speculative application. Here is what working at Emprime looks like.",
  });

  const hasOpenings = openings.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join early enough that your work still shapes the company."
        lead="We are a small team, which means less structure to hide behind and a lot more ownership. Nothing is open at this exact moment, but that changes quickly — and we read every speculative application that arrives."
        meta={[
          { value: `${team.length}`, label: "People" },
          { value: "Hybrid", label: "Work model" },
          { value: "Kochi", label: "Home base" },
        ]}
        media={
          <MediaFrame
            src="/images/about-studio.jpg"
            srcSet="/images/about-studio-1000.jpg 1000w, /images/about-studio.jpg 1536w"
            sizes="(min-width: 1024px) 34rem, 100vw"
            alt="The Emprime studio in Kochi, where the team works"
            ratio="aspect-[5/4] sm:aspect-[4/3]"
            overlay="dark"
            priority
            tilt
          >
            <div className="flex h-full items-end p-5 md:p-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-ink/20 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                <MapPin size={12} strokeWidth={1.75} />
                Your desk would be in this room
              </span>
            </div>
          </MediaFrame>
        }
      />

      <section id="openings" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Open roles"
            title={
              hasOpenings
                ? "Where we need people right now."
                : "No open roles at the moment."
            }
            lead={
              hasOpenings
                ? "Do not worry about matching every line. If the work sounds like yours, write to us."
                : "We hire in bursts, usually right after a new project is signed. When a role opens it is posted here first."
            }
          />

          {!hasOpenings && (
            <Reveal delay={0.12} className="glass mt-10 rounded-2xl p-6 sm:mt-14 sm:p-8 md:p-12">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/8 bg-abyss text-accent-soft">
                <Inbox size={24} strokeWidth={1.5} />
              </span>

              <h3 className="mt-7 font-display text-2xl font-semibold text-chalk">
                The door is not locked, just closed for now.
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
                Send us your work anyway. We keep applications on file for six months and go
                back to them before advertising anything publicly, so an early note often
                turns into the first conversation.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "Speculative application"
                  )}`}
                  className="w-full sm:w-auto"
                >
                  Send a speculative application
                </Button>
                <Button
                  to="/about"
                  variant="ghost"
                  withArrow={false}
                  className="w-full sm:w-auto"
                >
                  Read about the team
                </Button>
              </div>

              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-dim">
                Interns and freshers welcome · Portfolio over CV
              </p>
            </Reveal>
          )}

          {hasOpenings && <OpeningsList />}
        </div>
      </section>

      <section className="section-pad border-t border-ink/8 bg-abyss">
        <div className="section-shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Life here"
              title="What you can expect from us."
              lead="We are not going to pretend a startup is easy. We can promise it will not be boring, and that the promises we make in the offer letter are the ones we keep."
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="space-y-4">
              {perks.map((perk, i) => (
                <Reveal
                  as="li"
                  key={perk}
                  delay={i * 0.05}
                  className="glass card-hover flex items-start gap-3.5 rounded-xl px-5 py-4 sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent-soft">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-chalk">{perk}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Hiring process"
            title="When we do hire: four steps, about two weeks, no ghosting."
            align="center"
          />

          <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.08}
                className="glass card-hover relative rounded-2xl p-6 sm:p-7"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent-soft">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-chalk">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-mist">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-ink/8 bg-abyss">
        <div className="section-shell">
          <SectionHeading
            eyebrow="How we behave"
            title="The same rules we hold ourselves to with clients."
            align="center"
          />
          <div className="mt-10 grid gap-x-6 gap-y-8 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.07} className="border-t border-ink/10 pt-6">
                <h3 className="font-display text-[17px] font-semibold text-chalk">
                  {value.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-mist">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Say hello"
        title="Think you would fit? We would rather hear from you than not."
        lead="A short note about what you have built is more useful to us than a formatted CV."
      />
    </>
  );
}
