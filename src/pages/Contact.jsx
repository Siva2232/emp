import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { budgetRanges, contact, services } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import { cn, telHref, whatsappHref } from "../utils/helpers";
import { easeLuxury } from "../utils/motion";
import Backdrop from "../components/ui/Backdrop";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import FaqSection from "../components/sections/shared/FaqSection";

// 16px on small screens is deliberate: iOS Safari zooms into any field below it
const inputClasses =
  "w-full rounded-xl border border-ink/10 bg-ink/[0.03] px-4 py-3.5 text-[16px] text-chalk transition-colors duration-300 placeholder:text-slate-dim focus:border-accent/50 focus:outline-none focus:ring-0 sm:text-[15px]";

const labelClasses =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-dim";

const isEndpointConfigured = !contact.formEndpoint.includes("your-form-id");

function Field({ label, children, className }) {
  return (
    <div className={className}>
      <label className={labelClasses}>{label}</label>
      {children}
    </div>
  );
}

export default function Contact() {
  useSeo({
    title: "Contact Emprime — Start a project",
    description:
      "Tell us about your website, mobile app, custom software, POS or ERP project. We reply within one working day.",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Bots fill hidden fields; humans do not.
    if (data.get("_gotcha")) return;

    if (!isEndpointConfigured) {
      const body = [...data.entries()]
        .filter(([key]) => key !== "_gotcha")
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        "New project enquiry"
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Email us directly and we will pick it up from there.");
    }
  };

  const channels = [
    {
      icon: Phone,
      label: "Sales",
      value: contact.sales,
      href: telHref(contact.sales),
      note: "Fastest way to reach us",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.sales,
      href: whatsappHref(contact.whatsapp),
      note: "Send a brief or a screenshot",
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      note: "Replies within one working day",
    },
    {
      icon: Phone,
      label: "Support",
      value: contact.support,
      href: telHref(contact.support),
      note: "For existing clients",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building."
        lead="A short description is enough to start. We will come back with questions, an approach and an honest view of whether we are the right team for it."
        meta={[
          { value: "< 1 day", label: "Response time" },
          { value: "Free", label: "First consultation" },
          { value: "NDA", label: "On request" },
        ]}
      />

      <section className="section-pad relative overflow-hidden">
        <Backdrop variant="soft" className="opacity-60" />

        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal className="glass rounded-2xl p-6 sm:p-7 md:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easeLuxury }}
                    className="flex flex-col items-start py-10"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-lime/30 bg-lime/10 text-lime">
                      <Check size={24} strokeWidth={2} />
                    </span>
                    <h2 className="mt-7 font-display text-2xl font-semibold text-chalk">
                      Got it — thank you.
                    </h2>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mist">
                      Your enquiry is with us. Expect a reply within one working day, usually
                      sooner. If it is urgent, call {contact.sales}.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-[13px] font-medium text-accent-soft transition-colors hover:text-chalk"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-soft">
                        Project enquiry
                      </p>
                      <h2 className="mt-4 font-display text-2xl font-semibold text-chalk">
                        Start the conversation
                      </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name *">
                        <input
                          required
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Anand Menon"
                          className={inputClasses}
                        />
                      </Field>
                      <Field label="Work email *">
                        <input
                          required
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          className={inputClasses}
                        />
                      </Field>
                      <Field label="Phone">
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 97466 83778"
                          className={inputClasses}
                        />
                      </Field>
                      <Field label="Company">
                        <input
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Company name"
                          className={inputClasses}
                        />
                      </Field>
                      <Field label="What do you need *">
                        <select required name="service" defaultValue="" className={inputClasses}>
                          <option value="" disabled>
                            Select a service
                          </option>
                          {services.map((service) => (
                            <option key={service.slug} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </Field>
                      <Field label="Budget range">
                        <select name="budget" defaultValue="" className={inputClasses}>
                          <option value="" disabled>
                            Select a range
                          </option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label="Tell us about the project *">
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="What are you trying to fix or launch? Anything about your current process helps."
                        className={cn(inputClasses, "resize-y")}
                      />
                    </Field>

                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />

                    <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[13px] font-semibold text-white shadow-glow transition-all duration-500 hover:-translate-y-0.5 hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 size={16} strokeWidth={2} className="animate-spin" />
                            Sending
                          </>
                        ) : (
                          <>
                            Send enquiry
                            <ArrowUpRight
                              size={16}
                              strokeWidth={2.2}
                              className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </>
                        )}
                      </button>
                      <p className="text-[12px] text-slate-dim">
                        We reply within one working day. No mailing lists.
                      </p>
                    </div>

                    {status === "error" && (
                      <p className="rounded-xl border border-rose-500/30 bg-rose-500/8 px-4 py-3 text-[13px] text-rose-700">
                        {error}
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1} className="space-y-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass card-hover group flex items-start gap-3.5 rounded-xl p-4 sm:gap-4 sm:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink/10 bg-ink/[0.04] text-accent-soft">
                    <channel.icon size={17} strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-dim">
                      {channel.label}
                    </p>
                    <p className="mt-1 truncate text-[15px] font-medium text-chalk">
                      {channel.value}
                    </p>
                    <p className="mt-0.5 text-[12px] text-mist">{channel.note}</p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    className="ml-auto shrink-0 text-slate-dim transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-accent-soft"
                  />
                </a>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="glass mt-4 overflow-hidden rounded-xl">
              <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-accent/20 to-glow/5">
                <div className="grid-lines absolute inset-0 opacity-50" />
                <MapPin size={30} strokeWidth={1.4} className="relative text-chalk" />
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-dim">
                  Studio
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-chalk">{contact.address}</p>
                <p className="mt-4 flex items-center gap-2 text-[13px] text-mist">
                  <Clock size={13} strokeWidth={1.7} className="text-accent-soft" />
                  {contact.hours}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-soft transition-colors hover:text-chalk"
                >
                  Open in Maps
                  <ArrowUpRight size={14} strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
