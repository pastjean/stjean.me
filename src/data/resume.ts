export const data = {
  personal: {
    name: "Pierre-Alexandre St-Jean",
    title: "Principal Software Engineer",
    photo: "/profile.jpg",
    location: "Québec, QC, Canada",
    phone: "1 (418) 952-9232",
    website: "pa@stjean.me",
  },
  about: {
    title: "About Me",
    tech: "Core Technologies: Go, Rust, TypeScript, Python, React | Kubernetes, AWS, GCP | Event-driven systems, compliance automation",
    description: `Full-stack engineer focusing on backend, systems, and infrastructure with 12+ years in SaaS, fintech, and regulated environments. I built payment platforms, credit card fraud detection, HR & SCIM sync for 50k+ employee orgs, and analytics at scale delivering 2.5M+ events daily. Language agnostic, with strong suits in Go, TypeScript/JavaScript, and Rust. I handle backend code, infrastructure, compliance, and lead small teams when needed. I thrive in ambiguous situations, ship iteratively, and excel at aligning everyone - from CEOs, sales to junior engineers.`,
  },
  education: [
    {
      title: "Education",
      institution: "B.Eng. Software Engineering",
      school: "École de Technologie Supérieure",
      year: "2013",
      location: "Montreal, Canada",
    },
  ],
  links: {
    title: "Links",
    items: [
      {
        label: "Personal Website",
        url: "https://pa.stjean.me",
      },
      {
        label: "Github",
        url: "https://github.com/pastjean",
      },
    ],
  },
  talks: [
    {
      title: "The Rust Programming Language",
      location: "Cabane.io | Québec, Canada",
      date: "October 2018",
    },
    {
      title: "Microservices Without Interruption",
      location: "Web à Québec | Québec, Canada",
      date: "April 2017",
    },
  ],
  projects: [
    {
      title: "BlackboxDB.io (Sold)",
      role: "Founder",
      period: "Jan 2018 - June 2021",
      location: "Québec, Canada",
      description:
        "Built passwordless analytics platform in Node.js and Rust optimizing water filter performance in mining operations",
    },
  ],
  workExperience: [
    {
      title: "Principal Engineer (Contract)",
      company: "Pinata",
      period: "March 2025 - Present",
      location: "Remote",
      responsibilities: [
        "Built IPFS data migration system allowing clients to import content from 3 competing providers, enabling seamless platform switching",
        "Implemented an async job queue system (River) in Go to handle parallel background processing for file imports, pinning operations, and analytics",
        "Migrated infrastructure from AWS to Cloudflare/Digital Ocean with zero downtime, reducing costs by 50%",
      ],
    },
    {
      title: "Principal Software Engineer & Information Security Officer",
      company: "Blissbook",
      period: "February 2023 - March 2025",
      location: "Remote",
      responsibilities: [
        "Built TypeScript HR sync engine (frontend, backend & infra) for 50k+ employee orgs, integrating 50+ platforms (e.g., BambooHR, Workday, ADP)",
        "Built event-driven pipeline handling real-time employee lifecycle changes with idempotent processing and conflict resolution",
        "Led SOC 2 (Type I and II) certifications and achieve compliance in under 3 months through infrastructure automation and security controls",
        "Reduced deployment time from 3 hours to <15 minutes by optimizing Docker builds and simplifying Github actions pipelines",
      ],
    },
    {
      title: "Lead Software Engineer - Infrastructure",
      company: "Baseten",
      period: "October 2021 - October 2022",
      location: "Remote",
      responsibilities: [
        "Built observability infrastructure using OpenTelemetry for Python/Django platform hosting ML models on Kubernetes",
        "Reduced AWS costs 60% by optimizing resource allocation and introducing spot instances ",
        "Automated SOC 2 compliance infrastructure using Drata, accelerating certification timeline",
      ],
    },
    {
      title: "Senior Software Developer (Contract)",
      company: "Braver Health",
      period: "February 2021 - October 2021",
      location: "Québec, Canada",
      responsibilities: [
        "Designed and implemented zero-knowledge telehealth backend services in Rust, Elixir, and Python handling patient data under Quebec health regulations",
        "Built secure API layer for Flutter mobile app ensuring HIPAA-equivalent compliance for medical records",
        "Implemented observability stack and incident response procedures for production systems on GCP/Kubernetes",
      ],
    },
    {
      title: "Engineering Manager",
      company: "1Password",
      period: "August 2020 - February 2021",
      location: "Remote",
      responsibilities: [
        "Led team of 6 engineers building SCIM (System for Cross-domain Identity Management) integration connecting 1Password with enterprise identity providers (Azure AD, Okta, OneLogin)",
        "Designed bidirectional user provisioning system in Go handling automated account creation, updates, and deprovisioning",
        "Discovered and fixed critical security vulnerability in SCIM implementation, earning Security Employee of the Month",
      ],
    },
    {
      title: "Engineering Team Lead - Billing & Internationalization",
      company: "Pleo",
      period: "September 2019 - August 2020",
      location: "Remote",
      responsibilities: [
        "Led team of 5 building billing platform migration supporting new pricing tiers and multi-currency processing",
        "Architected localization system handling currency conversion, regional tax rules, and locale-specific formatting across European markets",
        "Built analytics data pipeline feeding business intelligence dashboards used by executive team for financial reporting",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Pleo",
      period: "September 2017 - September 2019",
      location: "Remote",
      responsibilities: [
        "Built fraud detection system processing card transactions in real-time, implementing rule engine and ML-based anomaly detection",
        "Architected banking integration layer synchronizing transactions from multiple European banks and card processors",
        "Designed data pipeline processing millions in monthly transactions, building analytics infrastructure for BI team",
        "Scaled platform infrastructure supporting company growth from 15 to 400 employees maintaining 99.9% uptime",
      ],
    },
    {
      title: "Engineering Team Lead",
      company: "Coveo",
      period: "January 2017 - September 2017",
      location: "Québec, Canada",
      responsibilities: [
        "Led cloud infrastructure team managing Kubernetes deployments for SaaS search platform",
        "Championed infrastructure-as-code adoption across engineering organization using Terraform",
        "Contributed to Kubernetes open source project fixing bugs in cluster management",
      ],
    },
    {
      title: "Software Developer",
      company: "Coveo",
      period: "December 2014 - January 2017",
      location: "Québec, Canada",
      responsibilities: [
        "Built analytics backend processing 2.5M+ events/day for search analytics product",
        "Optimized Redshift database schema and queries reducing query time by 70%",
        "Implemented load balancing for database clusters handling high-volume analytics writes",
        "Built automated demo environment provisioning using Docker and Consul on AWS",
      ],
    },
  ],
};
