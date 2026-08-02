import { useSeo } from "../hooks/useSeo";
import Backdrop from "../components/ui/Backdrop";
import Button from "../components/ui/Button";

export default function NotFound() {
  useSeo({
    title: "Page not found — Emprime",
    description: "The page you were looking for does not exist.",
  });

  return (
    <section className="grain relative flex min-h-[85vh] items-center overflow-hidden">
      <Backdrop variant="soft" />

      <div className="section-shell relative z-10">
        <p className="eyebrow">
          <span className="h-1 w-1 rounded-full bg-accent-soft" />
          Error 404
        </p>
        <h1 className="display-lg mt-6 max-w-2xl text-chalk">
          This page did not make it to production.
        </h1>
        <p className="body-lg mt-6 max-w-lg">
          The link is broken or the page has moved. Head back to the homepage, or tell us what you
          were looking for and we will point you at it.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="ghost" withArrow={false}>
            Report the link
          </Button>
        </div>
      </div>
    </section>
  );
}
