import { MapPin, Sparkles, Users } from "lucide-react";
import { brand, industries, stats, team, values } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import Counter from "../components/ui/Counter";
import MediaFrame from "../components/ui/MediaFrame";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import ProcessTimeline from "../components/sections/shared/ProcessTimeline";
import WhyEmprime from "../components/sections/shared/WhyEmprime";
import Testimonials from "../components/sections/shared/Testimonials";
import CtaBand from "../components/sections/shared/CtaBand";

const initialsOf = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

export default function About() {
  useSeo({
    title: "About Emprime — A young engineering studio in Kochi",
    description:
      "Emprime is a startup engineering studio in Kochi building web, mobile, POS and ERP systems. Here is how we work and what we believe.",
  });

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We started Emprime because good software kept going to the wrong people."
        lead="Small businesses were paying enterprise prices for templates, or paying nothing and getting something that broke in month three. We thought there was room for a studio that scoped honestly and built properly."
        meta={[
          { value: brand.founded, label: "Founded" },
          { value: brand.location, label: "Based in" },
          { value: "7+", label: "Projects live" },
        ]}
        media={
          <MediaFrame
            src="/images/about-hero.jpg"
            srcSet="/images/about-hero-700.jpg 700w, /images/about-hero.jpg 1024w"
            sizes="(min-width: 1024px) 34rem, 100vw"
            alt="An Emprime engineer at work in the Kochi studio"
            ratio="aspect-[5/4] sm:aspect-[4/5]"
            overlay="dark"
            priority
            tilt
          >
            <div className="flex h-full flex-col justify-between p-4 sm:p-5 md:p-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-ink/20 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Inside the studio
              </span>

              <div>
                <p className="max-w-[16rem] font-display text-base font-medium leading-snug text-white sm:text-lg">
                  One room, one team, and every project on a screen you can walk up to.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-ink/20 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-md sm:mt-4">
                  <MapPin size={12} strokeWidth={1.75} />
                  {brand.location}
                </span>
              </div>
            </div>
          </MediaFrame>
        }
      />

      <section className="bg-void pb-2 pt-2 sm:pb-0 sm:pt-0">
        <div className="section-shell">
          <Reveal
            delay={0.1}
            className="relative z-10 mx-auto -mt-8 max-w-5xl sm:-mt-11 md:-mt-16"
          >
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 shadow-lift md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-4 sm:p-5 md:p-7">
                  <dd className="font-display text-2xl font-semibold text-chalk sm:text-3xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-2 text-[12px] font-medium text-chalk sm:text-[13px]">
                    {stat.label}
                  </dt>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-dim sm:mt-1.5 sm:text-[10px]">
                    {stat.note}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-pad overflow-x-clip">
        <div className="section-shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Our story" title="Founded on a fairly simple frustration." />
            <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-mist">
              <p>
                Emprime began in {brand.founded} with a handful of engineers who had spent years
                inside larger teams watching good projects get slowed down by process nobody could
                justify. We wanted to work directly with the people who use the software.
              </p>
              <p>
                Our first client was a resort that was tracking room availability in a notebook. The
                second was a supermarket running two billing machines that did not talk to each
                other. Neither project was glamorous. Both changed how those businesses ran, which
                turned out to be the part we cared about.
              </p>
              <p>
                Seven projects later the pattern is consistent: the useful work is rarely the flashy
                feature. It is the report that reconciles, the counter that stays up, the form that
                does not lose data. We build for that, and we are transparent about being early —
                you can talk to every client we have.
              </p>
            </div>

            <div className="mt-11 border-t border-ink/8 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-dim">
                Sectors we have shipped into
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <li
                    key={industry.label}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-[12px] text-mist transition-colors duration-300 hover:border-accent/25 hover:text-chalk"
                  >
                    <industry.icon size={13} strokeWidth={1.75} className="text-accent-soft" />
                    {industry.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-10 lg:col-span-5 lg:col-start-8">
            <Reveal direction="left" className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <MediaFrame
                src="/images/about-story.jpg"
                srcSet="/images/about-story-700.jpg 700w, /images/about-story.jpg 1024w"
                sizes="(min-width: 1024px) 32rem, 100vw"
                alt="Two Emprime engineers mapping a system flow on a glass wall of sticky notes"
                ratio="aspect-[3/4]"
                tilt
              />

              <div className="glass absolute inset-x-3 -bottom-5 rounded-2xl p-4 shadow-lift sm:inset-x-auto sm:left-4 sm:right-auto sm:max-w-[16rem] sm:p-5 md:-bottom-8 md:left-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-ink/8 bg-abyss text-accent-soft">
                  <Sparkles size={15} strokeWidth={1.75} />
                </span>
                <p className="mt-3 text-[13px] leading-relaxed text-mist sm:mt-4">
                  Every build starts on a wall like this. Scope gets agreed before a line of code is
                  written.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-ink/8 bg-abyss">
        <div className="section-shell">
          <SectionHeading
            eyebrow="What we believe"
            title="Four rules we do not break, even when it costs us the deal."
            align="center"
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 0.08}
                className="group glass card-hover relative overflow-hidden rounded-2xl p-7 sm:p-8 md:p-9"
              >
                <span className="pointer-events-none absolute right-6 top-3 font-display text-6xl font-semibold text-ink/5 transition-colors duration-500 group-hover:text-accent/15">
                  0{i + 1}
                </span>
                <p className="relative font-mono text-[11px] tracking-[0.2em] text-slate-dim">
                  0{i + 1}
                </p>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-chalk">
                  {value.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-mist">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal direction="right" className="lg:col-span-7">
              <MediaFrame
                src="/images/about-team.jpg"
                srcSet="/images/about-team-1000.jpg 1000w, /images/about-team.jpg 1536w"
                sizes="(min-width: 1024px) 48rem, 100vw"
                alt="The Emprime team reviewing a build together around one table"
                ratio="aspect-[16/11]"
                overlay="dark"
              >
                <div className="flex h-full items-end p-6 md:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-ink/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                    <Users size={12} strokeWidth={1.75} />
                    Sprint review · every Monday
                  </span>
                </div>
              </MediaFrame>
            </Reveal>

            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The team"
                title="Small enough that you will know everyone by name."
                lead="No account managers between you and the people building your system."
              />
              <p className="mt-8 text-[15px] leading-relaxed text-mist">
                The person who scopes your project is in the room when it is built and on the call
                when it launches. Nothing gets passed to a delivery unit you have never met.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal
                key={member.name}
                delay={i * 0.07}
                className="glass card-hover rounded-2xl p-6 sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-ink/8 bg-gradient-to-br from-accent/18 to-glow/10 font-display text-[15px] font-semibold text-accent-deep">
                    {initialsOf(member.name)}
                  </span>
                  <div>
                    <h3 className="font-display text-[17px] font-semibold text-chalk">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-mist">{member.role}</p>
                  </div>
                </div>
                <p className="mt-6 border-t border-ink/8 pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-dim">
                  {member.focus}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyEmprime />
      <ProcessTimeline />
      <Testimonials />
      <CtaBand
        eyebrow="Work with us"
        title="If this sounds like the team you want, let's talk."
        lead="We take on a small number of projects at a time so each one gets proper attention."
      />
    </>
  );
}
