import {
  Boxes,
  Code2,
  Compass,
  Factory,
  GraduationCap,
  Globe,
  Hammer,
  LayoutDashboard,
  PenTool,
  Rocket,
  ScanBarcode,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Stethoscope,
  Truck,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

export const brand = {
  name: "Emprime",
  fullName: "Emprime Technologies",
  tagline:
    "A young engineering studio building websites, apps and business systems that hold up under real use.",
  founded: "2025",
  location: "Kochi, Kerala",
};

export const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const contact = {
  email: "info.emprime@gmail.com",
  sales: "+91 97466 83778",
  support: "+91 97466 83778",
  whatsapp: "+919746683778",
  address: "Matha Business Center, Amrita Hospital, Amrita Nagar, Edappally, Kochi, Ernakulam, Kerala 682041",
  hours: "Mon – Sat · 9:30 AM to 6:30 PM IST",
  // Replace with your own Formspree form ID to start receiving submissions.
  formEndpoint: "https://formspree.io/f/your-form-id",
};

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  // { label: "GitHub", href: "https://github.com" },
];

export const heroWords = ["websites", "mobile apps", "POS systems", "ERP platforms"];

export const stats = [
  { value: 7, suffix: "+", label: "Projects delivered", note: "Live and in use today" },
  { value: 5, suffix: "", label: "Core capabilities", note: "Web to ERP, one team" },
  { value: 100, suffix: "%", label: "On-time launches", note: "Every project so far" },
  { value: 6, suffix: " wks", label: "Typical first launch", note: "Discovery to production" },
];

export const services = [
  {
    slug: "website-development",
    icon: Globe,
    visual: "browser",
    timeline: "3–5 weeks",
    title: "Website Development",
    short: "Marketing sites and web platforms that load fast and convert.",
    description:
      "We design and build websites that carry their weight — fast, accessible, easy for your team to update, and structured so search engines actually understand what you do.",
    deliverables: [
      "Design system and responsive UI",
      "Headless CMS your team can run",
      "Core Web Vitals and SEO groundwork",
      "Analytics and conversion tracking",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Sanity"],
    bestFor: "Brands that need a credible digital front door with room to grow.",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    visual: "phone",
    timeline: "6–10 weeks",
    title: "Mobile App Development",
    short: "One codebase, both stores, native-grade feel.",
    description:
      "Cross-platform apps that behave like native ones. We handle the unglamorous parts too — offline states, push notifications, store review, and release pipelines.",
    deliverables: [
      "iOS and Android from one codebase",
      "Offline-first data handling",
      "Push notifications and deep links",
      "App Store and Play Store release",
    ],
    stack: ["React Native", "Flutter", "Firebase", "REST", "GraphQL"],
    bestFor: "Products that need to live on a customer's home screen.",
  },
  {
    slug: "custom-software",
    icon: Code2,
    visual: "dashboard",
    timeline: "6–12 weeks",
    title: "Custom Software",
    short: "Internal tools shaped around how your business already works.",
    description:
      "When spreadsheets and off-the-shelf tools start costing you hours a week, we build the thing that fits. Scoped tightly, shipped in increments, documented so you are never locked in.",
    deliverables: [
      "Workflow and data modelling",
      "Role-based dashboards and admin",
      "Third-party and legacy integrations",
      "Handover docs and training",
    ],
    stack: ["React", "Node.js", "Python", "PostgreSQL", "Docker"],
    bestFor: "Teams outgrowing manual process and disconnected tools.",
  },
  {
    slug: "pos-systems",
    icon: ScanBarcode,
    visual: "pos",
    timeline: "4–8 weeks",
    title: "POS Systems",
    short: "Billing that stays up when the queue is long.",
    description:
      "Point-of-sale built for the counter, not the demo. Keyboard-first billing, offline fallback, printer and scanner support, and reporting that reconciles at the end of the day.",
    deliverables: [
      "Fast keyboard-driven billing",
      "Offline mode with auto-sync",
      "Thermal printer and barcode support",
      "Shift, tax and GST reporting",
    ],
    stack: ["React", "Electron", "SQLite", "Node.js", "Razorpay"],
    bestFor: "Retail counters, cafés, restaurants and multi-outlet chains.",
  },
  {
    slug: "erp-systems",
    icon: LayoutDashboard,
    visual: "erp",
    timeline: "8–16 weeks",
    title: "ERP Systems",
    short: "Inventory, sales, purchase and accounts in one honest source of truth.",
    description:
      "Modular ERP rolled out one department at a time, so the business keeps running while it changes. You get real stock numbers, real margins, and reports leadership can trust.",
    deliverables: [
      "Inventory and warehouse control",
      "Purchase, sales and invoicing",
      "Approval flows and audit trails",
      "Management reporting and exports",
    ],
    stack: ["React", "NestJS", "PostgreSQL", "Redis", "AWS"],
    bestFor: "Distributors and manufacturers running on disconnected systems.",
  },
];

export const industries = [
  { icon: ShoppingBag, label: "Retail & Commerce" },
  { icon: UtensilsCrossed, label: "Food & Hospitality" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Truck, label: "Logistics" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
];

export const projects = [
  {
    slug: "verdant-retreat",
    name: "Verdant Retreat",
    visual: "browser",
    industry: "Hospitality",
    year: "2025",
    service: "Website Development",
    summary:
      "A booking-led website for a highland resort, built to sell the place before a guest ever calls.",
    problem:
      "Enquiries arrived over phone and were tracked in a notebook. Room availability was guesswork.",
    outcome: "Direct bookings replaced phone-only enquiries within the first season.",
    metrics: [
      { value: "2.4x", label: "Enquiry volume" },
      { value: "1.1s", label: "Largest paint" },
    ],
    tags: ["Booking flow", "CMS", "SEO"],
    accent: "from-emerald-400/25 to-teal-500/10",
  },
  {
    slug: "kudos-mart",
    name: "Kudos Mart POS",
    visual: "pos",
    industry: "Retail",
    year: "2025",
    service: "POS Systems",
    summary:
      "Offline-capable billing for a three-outlet supermarket, with stock that reconciles across branches.",
    problem:
      "Two legacy billing machines, no shared inventory, and daily closing that took an hour.",
    outcome: "Closing reports now generate in under a minute across all outlets.",
    metrics: [
      { value: "38%", label: "Faster billing" },
      { value: "3", label: "Outlets synced" },
    ],
    tags: ["Offline sync", "GST", "Multi-outlet"],
    accent: "from-violet-400/25 to-indigo-500/10",
  },
  {
    slug: "fleetledger",
    name: "FleetLedger",
    visual: "fleet",
    industry: "Logistics",
    year: "2025",
    service: "ERP Systems",
    summary:
      "Trip, fuel and maintenance tracking for a regional transport operator, replacing four spreadsheets.",
    problem:
      "Cost per trip was calculated weeks late, so unprofitable routes kept running.",
    outcome: "Route profitability is now visible the day a trip closes.",
    metrics: [
      { value: "4", label: "Systems replaced" },
      { value: "11 hrs", label: "Saved weekly" },
    ],
    tags: ["Fleet ops", "Reporting", "Roles"],
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    slug: "pulsecare",
    name: "PulseCare",
    visual: "dashboard",
    industry: "Healthcare",
    year: "2025",
    service: "Custom Software",
    summary:
      "Clinic management for a two-branch practice: appointments, records and follow-up reminders.",
    problem: "Patients were double-booked and follow-ups depended on someone remembering.",
    outcome: "Missed follow-ups dropped once reminders became automatic.",
    metrics: [
      { value: "0", label: "Double bookings" },
      { value: "2", label: "Branches live" },
    ],
    tags: ["Scheduling", "Records", "Reminders"],
    accent: "from-rose-400/25 to-pink-500/10",
  },
  {
    slug: "zaituun",
    name: "Zaituun",
    visual: "phone",
    industry: "Food & Beverage",
    year: "2026",
    service: "Mobile App Development",
    summary:
      "Ordering and loyalty app for a restaurant group, with kitchen display screens on the other end.",
    problem: "Third-party delivery apps owned the customer and most of the margin.",
    outcome: "A direct ordering channel the group actually controls.",
    metrics: [
      { value: "iOS + Android", label: "One codebase" },
      { value: "22%", label: "Repeat orders" },
    ],
    tags: ["Ordering", "Loyalty", "KDS"],
    accent: "from-amber-400/25 to-orange-500/10",
  },
  {
    slug: "stitchline",
    name: "StitchLine",
    visual: "erp",
    industry: "Manufacturing",
    year: "2026",
    service: "ERP Systems",
    summary:
      "Production floor tracking for a garment unit — job cards, wastage and stage-wise output.",
    problem: "Output was counted at the end of the line, so bottlenecks stayed invisible.",
    outcome: "Supervisors can see where a batch is stalling while it is still stalling.",
    metrics: [
      { value: "6", label: "Stages tracked" },
      { value: "9%", label: "Less wastage" },
    ],
    tags: ["Job cards", "Floor ops", "Dashboards"],
    accent: "from-lime-400/25 to-green-500/10",
  },
  {
    slug: "ledgerlite",
    name: "LedgerLite",
    visual: "invoice",
    industry: "Professional Services",
    year: "2026",
    service: "Custom Software",
    summary:
      "A billing and reconciliation tool for a chartered accountancy firm handling 100+ clients.",
    problem: "Client billing lived in one person's head and a folder of templates.",
    outcome: "Invoicing runs on a schedule instead of a reminder.",
    metrics: [
      { value: "100+", label: "Client books" },
      { value: "5 days", label: "Faster billing" },
    ],
    tags: ["Invoicing", "Recurring", "Exports"],
    accent: "from-sky-400/25 to-indigo-500/10",
  },
];

export const process = [
  {
    step: "01",
    icon: Compass,
    title: "Understand",
    duration: "Week 1",
    body: "We sit with the people who will actually use the thing. Current process, real constraints, what breaks today. You get a written scope before anyone opens a design tool.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Design",
    duration: "Weeks 2–3",
    body: "Flows first, then screens. You review clickable prototypes, not static images, so problems surface while they are still cheap to fix.",
  },
  {
    step: "03",
    icon: Hammer,
    title: "Build",
    duration: "Weeks 3–6",
    body: "Two-week sprints with a working build at the end of each one. Nothing is a surprise at handover because you have been using it all along.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Harden",
    duration: "Pre-launch",
    body: "Real-device testing, load checks, backups, access control and a rollback plan. We would rather find it than your customer.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch & evolve",
    duration: "Ongoing",
    body: "We deploy, train your team, and stay on for support. Most clients keep shipping with us after launch instead of starting over elsewhere.",
  },
];

export const differentiators = [
  {
    icon: Zap,
    title: "Small team, senior hands",
    body: "The people in your kickoff call are the people writing the code. Nothing gets passed down to a junior bench.",
  },
  {
    icon: ShieldCheck,
    title: "You own everything",
    body: "Source code, infrastructure, accounts and documentation are yours from day one. No hostage situations.",
  },
  {
    icon: Boxes,
    title: "Scoped in phases",
    body: "We ship a useful slice early instead of disappearing for six months. You can stop, pivot or expand between phases.",
  },
  {
    icon: Rocket,
    title: "Startup pace, studio standards",
    body: "We move quickly because we are small, and we test properly because we have to live with what we build.",
  },
];

export const values = [
  {
    title: "Say the hard thing early",
    body: "If a feature is a bad idea or a deadline is unrealistic, you hear it in week one, not week nine.",
  },
  {
    title: "Boring where it counts",
    body: "Proven tools for the foundation. We save the clever ideas for the parts your customers actually see.",
  },
  {
    title: "Built to be handed over",
    body: "Readable code and real documentation, because someone else will maintain this eventually.",
  },
  {
    title: "Finish before you start",
    body: "We would rather ship five features properly than leave fifteen at ninety percent.",
  },
];

export const team = [
  { name: "Founding Engineer", role: "Architecture & backend", focus: "ERP, POS, integrations" },
  { name: "Design Lead", role: "Product & interface design", focus: "Design systems, prototypes" },
  { name: "Frontend Engineer", role: "Web & mobile interfaces", focus: "React, React Native" },
  { name: "Delivery Lead", role: "Scoping & client success", focus: "Sprints, QA, handover" },
];

export const testimonials = [
  {
    quote:
      "They pushed back on half the features we asked for, and they were right. We launched two months earlier than planned and nothing was missing.",
    name: "Operations Director",
    company: "Retail chain · Kochi",
  },
  {
    quote:
      "The first working version was in our hands in three weeks. Every sprint after that felt like the product was ours, not theirs.",
    name: "Managing Partner",
    company: "Logistics operator · Coimbatore",
  },
  {
    quote:
      "Our billing counters have not gone down once since the switch, including through a power cut on a Saturday evening.",
    name: "Store Manager",
    company: "Supermarket group · Thrissur",
  },
];

export const faqs = [
  {
    q: "You are a startup — why should we trust you with something critical?",
    a: "Fair question. We have seven projects live and in daily use, and we are happy to put you in touch with the people running them. We also scope work in phases, so you can judge us on a small piece before committing to the whole thing.",
  },
  {
    q: "How do you price a project?",
    a: "Fixed price per phase once the scope is written, or a monthly retainer for ongoing work. Either way you approve the number before anything starts, and change requests get quoted separately rather than absorbed silently.",
  },
  {
    q: "How long does a typical project take?",
    a: "A marketing website runs three to five weeks. A mobile app or POS rollout is six to ten. A phased ERP starts delivering value in about eight weeks and continues module by module.",
  },
  {
    q: "Do you work with our existing systems?",
    a: "Usually yes. Most of our work involves talking to something that already exists — Tally, an old billing machine, a payment gateway, or a warehouse spreadsheet nobody wants to give up.",
  },
  {
    q: "What happens after launch?",
    a: "You get a support window included, then an optional monthly plan for fixes, hosting and small improvements. If you would rather take it in-house, we hand over documentation and walk your team through it.",
  },
  {
    q: "Do you sell any ready-made products?",
    a: "Not yet. Everything today is built for a specific client. We are developing our own POS and ERP products for release, and existing clients will get first access.",
  },
];

// No roles open at the moment. Add entries here and the Careers page switches from its
// empty state to a full listing automatically.
// Shape: { title, type, location, experience, blurb }
export const openings = [];

export const perks = [
  "Work on production systems from your first month",
  "Four-day deep-work weeks, meetings on Fridays only",
  "Learning budget for courses, books and conferences",
  "Hybrid schedule with a real office when you want one",
  "Transparent pay bands, reviewed twice a year",
  "Your name on the work you ship",
];

export const techStack = [
  "React",
  "Next.js",
  "React Native",
  "Flutter",
  "Node.js",
  "NestJS",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Figma",
  "GraphQL",
  "Electron",
];

export const budgetRanges = [
  "Under ₹1 lakh",
  "₹1 – 3 lakhs",
  "₹3 – 8 lakhs",
  "₹8 lakhs and above",
  "Not sure yet",
];
