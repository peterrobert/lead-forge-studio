export const NAV = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Pricing", to: "/pricing" as const },
  { label: "Contact", to: "/contact" as const },
];

export const CONTACT = {
  phoneDisplay: "+254 790 57 86 86",
  phoneTel: "+254790578686",
  whatsapp: "254790578686",
  email: "peter.robert5@icloud.com",
  location: "Nairobi, Kenya",
  hours: "Office Hours: Mon - Fri, 9am - 5pm EAT",
  github: "https://github.com/peterrobert",
  linkedin: "https://www.linkedin.com/in/peterrobertndungu/",
};

export const LOGO_URL = "/imported/4f4fe312c410-leadforge-studio-logo.svg";

export const SITE_TITLE =
  "Lead Forge Studio — Web Design & Development in Nairobi, Kenya";

export const PROJECTS = [
  {
    id: "depot-covers",
    title: "Depot Covers",
    category: "Business Website",
    tag: "Branding & Printing",
    description:
      "A modern responsive website for a Kenyan branding and printing company, built to showcase its services and capabilities.",
    longDescription:
      "A modern responsive website for a Kenyan branding and printing company, built to showcase its services, work, and capabilities while generating customer enquiries through optimized lead capture forms.",
    whatWasBuilt: [
      "business website design",
      "service presentation",
      "portfolio presentation",
      "responsive design",
      "lead generation",
    ],
    tech: ["HTML/CSS", "JavaScript", "Tailwind CSS", "React", "Framer Motion", "Sanity CMS"],
    img: "/imported/5853a2971b6a-deport.webp",
    website: "https://depotcovers.co.ke",
    featured: true,
  },
  {
    id: "kikuyu-water",
    title: "Kikuyu Water & Sewerage Company",
    category: "Web Platform",
    tag: "Water Utility",
    description:
      "A modern customer-facing digital platform designed to make water utility services easier to access online.",
    longDescription:
      "A modern customer-facing digital platform designed to make water utility services easier to access online. The platform streamlines the interaction between the utility company and its customers, reducing physical paperwork and visit times.",
    whatWasBuilt: [
      "customer services",
      "online applications",
      "billing and payments",
      "service requests",
      "complaint reporting",
      "customer account functionality",
    ],
    tech: ["Nextjs", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    img: "/imported/edbc2492eaeb-kikuyuMain.webp",
    website: "https://kikuyuwater.co.ke",
    featured: true,
  },
  {
    id: "wisa-guard",
    title: "Wisa Guard Security Services",
    category: "Corporate Website",
    tag: "Security Services",
    description:
      "A professional corporate website designed to communicate Wisa Guard's security services and establish trust.",
    longDescription:
      "A professional corporate website designed to communicate Wisa Guard's security services, establish trust through professional presentation, and generate high-quality enquiries via targeted call-to-actions.",
    whatWasBuilt: [
      "corporate website design",
      "service architecture",
      "trust-focused presentation",
      "lead generation",
      "responsive development",
    ],
    tech: ["Nextjs", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    img: "/imported/10053ec87705-wisagurdmain.webp",
    website: "https://wisaguardsecurity.co.ke/",
    featured: true,
  },
  {
    id: "swiftdispatch",
    title: "SwiftDispatch",
    category: "Engineering Project",
    tag: "Logistics SaaS (Ruby on Rails + React)",
    description:
      "A production-grade, multi-tenant logistics and delivery management platform engineered for scale.",
    longDescription:
      "A production-grade, multi-tenant logistics and delivery management platform engineered to mirror the architecture, workflows, and practices of a real software company — a deep-dive project in backend architecture, scalable systems, and technical interview prep.",
    whatWasBuilt: [
      "multi-tenant architecture",
      "real-time tracking",
      "automated dispatching",
      "complex state management",
      "RESTful API design",
    ],
    tech: ["Ruby on Rails", "React", "Redis", "Sidekiq"],
    img: "/imported/20115d96f08f-gen_4f486afc08_5d3b7b35d8138db0.png",
    website: "https://github.com/peterrobert/SwiftDispatch-backend",
    featured: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "George Kenyatta, CEO",
    business: "Depot Covers",
    quote:
      "Lead Forge Studio transformed our online presence. Our new website is not only beautiful but has significantly increased our lead generation.",
    rating: 5,
  },
  {
    name: "Florence Wanjohi, Human Resources Manager",
    business: "Kikuyu Water",
    quote:
      "The web platform built for us has streamlined our billing and customer service immensely. They understood our needs perfectly.",
    rating: 5,
  },
  {
    name: "Cynthia Cease, Human Resources Manager",
    business: "Wisa Guard Security",
    quote:
      "Fast, professional, and very easy to work with. They delivered exactly what they promised on time and within budget.",
    rating: 5,
  },
] as const;
