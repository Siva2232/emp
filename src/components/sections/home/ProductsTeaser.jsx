import { Clock, LayoutDashboard, ScanBarcode } from "lucide-react";
import Button from "../../ui/Button";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";

const upcoming = [
  {
    icon: ScanBarcode,
    name: "Emprime POS",
    stage: "In development",
    body: "Everything we learned building billing counters, packaged as a product you can subscribe to instead of commission.",
  },
  {
    icon: LayoutDashboard,
    name: "Emprime ERP",
    stage: "Design stage",
    body: "Modular inventory, purchase and accounts for small distributors who find the enterprise options absurd.",
  },
];

export default function ProductsTeaser() {
  return (
    <section id="products" className="section-pad relative">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="On the roadmap"
              title="Right now we build to order. Products are coming."
              lead="Every client system teaches us what should have been a product in the first place. Two of those are being built out now, and clients we work with today get first access and founding pricing."
            />
            <Reveal delay={0.2} className="mt-8">
              <Button to="/contact" variant="ghost">
                Join the early list
              </Button>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {upcoming.map((item, i) => (
              <Reveal
                key={item.name}
                delay={0.1 + i * 0.1}
                className="glass card-hover relative flex flex-col rounded-2xl p-6 sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.04] text-accent-soft">
                  <item.icon size={19} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-chalk">{item.name}</h3>
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-ink/12 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-dim">
                  <Clock size={11} strokeWidth={1.8} />
                  {item.stage}
                </span>
                <p className="mt-4 text-[14px] leading-relaxed text-mist">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
