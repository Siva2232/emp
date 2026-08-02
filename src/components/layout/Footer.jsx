import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { brand, contact, navLinks, services, socials } from "../../data/site";
import { telHref } from "../../utils/helpers";
import Backdrop from "../ui/Backdrop";
import Logo from "../ui/Logo";
import Reveal from "../ui/Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ink/8 bg-abyss">
      <Backdrop variant="soft" className="opacity-60" />

      <div className="section-shell relative z-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-11 py-14 md:grid-cols-12 md:gap-14 md:py-20">
          <div className="col-span-2 md:col-span-5">
            <Link
              to="/"
              className="inline-flex transition-opacity duration-500 hover:opacity-70"
            >
              <Logo className="h-6 md:h-7" alt={`${brand.name} home`} />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mist">
              {brand.tagline}
            </p>
            <Reveal
              as="div"
              direction="none"
              className="mt-8 flex flex-wrap gap-2"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/10 px-4 py-2 text-[12px] text-mist transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/50 hover:text-chalk"
                >
                  {social.label}
                </a>
              ))}
            </Reveal>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-dim">
              Company
            </p>
            <ul className="mt-4 space-y-1 md:mt-5">
              <li>
                <Link
                  to="/"
                  className="inline-block py-1.5 text-[14px] text-mist transition-colors hover:text-chalk"
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block py-1.5 text-[14px] text-mist transition-colors hover:text-chalk"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-dim">
              Services
            </p>
            <ul className="mt-4 space-y-1 md:mt-5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="inline-block py-1.5 text-[14px] text-mist transition-colors hover:text-chalk"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-6 lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-dim">
              Reach us
            </p>
            <ul className="mt-4 space-y-4 md:mt-5">
              <li className="flex gap-3">
                <MapPin size={15} strokeWidth={1.6} className="mt-1 shrink-0 text-accent-soft" />
                <span className="text-[14px] leading-relaxed text-mist">{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={15} strokeWidth={1.6} className="mt-0.5 shrink-0 text-accent-soft" />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all py-0.5 text-[14px] text-mist transition-colors hover:text-chalk"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={15} strokeWidth={1.6} className="mt-0.5 shrink-0 text-accent-soft" />
                <div>
                  <a
                    href={telHref(contact.sales)}
                    className="block py-0.5 text-[14px] text-mist transition-colors hover:text-chalk"
                  >
                    {contact.sales} <span className="text-slate-dim">· sales</span>
                  </a>
                  <a
                    href={telHref(contact.support)}
                    className="block py-0.5 text-[14px] text-mist transition-colors hover:text-chalk"
                  >
                    {contact.support} <span className="text-slate-dim">· support</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink/8 py-6 text-[12px] text-slate-dim sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-7">
          <p>
            © {year} {brand.fullName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>{brand.location}</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-chalk"
            >
              Back to top
              <ArrowUpRight
                size={13}
                strokeWidth={2}
                className="transition-transform duration-500 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
