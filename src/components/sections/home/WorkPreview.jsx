import { projects } from "../../../data/site";
import Button from "../../ui/Button";
import ProjectCard from "../../ui/ProjectCard";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";

export default function WorkPreview() {
  const featured = projects.slice(0, 4);

  return (
    <section className="section-pad relative overflow-hidden border-t border-ink/8 bg-abyss">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Seven projects live, and every one of them still in daily use."
            lead="We are early, so we would rather show you real systems than a wall of logos. Drag or scroll to look through a few."
            className="md:max-w-3xl"
          />
          <Reveal delay={0.2} className="shrink-0">
            <Button to="/work" variant="ghost">
              View all work
            </Button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} direction="none" className="mt-10 sm:mt-14">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5 pb-4 sm:gap-5 sm:scroll-pl-8 sm:px-8 lg:scroll-pl-12 lg:px-12">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              className="w-[85vw] shrink-0 snap-start sm:w-[30rem]"
            />
          ))}
          <div className="glass flex w-[85vw] shrink-0 snap-start flex-col justify-center gap-5 rounded-2xl p-7 sm:w-[20rem] sm:p-8">
            <p className="font-display text-2xl font-semibold text-chalk">
              Three more we cannot show publicly yet.
            </p>
            <p className="text-[14px] leading-relaxed text-mist">
              Internal tools under NDA. Happy to walk you through them on a call.
            </p>
            <Button to="/contact" size="sm" className="self-start">
              Ask for a walkthrough
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
