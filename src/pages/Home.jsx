import { useSeo } from "../hooks/useSeo";
import Hero from "../components/sections/home/Hero";
import TrustStrip from "../components/sections/home/TrustStrip";
import ServicesGrid from "../components/sections/home/ServicesGrid";
import WorkPreview from "../components/sections/home/WorkPreview";
import ProductsTeaser from "../components/sections/home/ProductsTeaser";
import ProcessTimeline from "../components/sections/shared/ProcessTimeline";
import WhyEmprime from "../components/sections/shared/WhyEmprime";
import Testimonials from "../components/sections/shared/Testimonials";
import FaqSection from "../components/sections/shared/FaqSection";
import CtaBand from "../components/sections/shared/CtaBand";

export default function Home() {
  useSeo({
    title: "Emprime — Websites, Mobile Apps, POS & ERP Systems",
    description:
      "Emprime is a Kochi-based engineering studio building websites, mobile apps, custom software, POS and ERP systems. Seven projects delivered and live.",
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WorkPreview />
      <ProcessTimeline />
      <WhyEmprime />
      <ProductsTeaser />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </>
  );
}
