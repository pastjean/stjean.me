import type { ResumeData } from '@/types/resume';

export const data: ResumeData = {
  basics: {
    name: "Pierre-Alexandre St-Jean",
    label: "Principal Software Engineer",
    image: "/profile.jpg",
    email: "pa@stjean.me",
    phone: "1 (418) 952-9232",
    url: "https://pa.stjean.me",
    summary: "Product engineer and team leader with 12+ years in SaaS and fintech. I've built payment systems, fraud detection, HR & SCIM sync for 50k+ orgs, analytics pipelines handling millions of daily events, and led SOC 2 compliance. Language and stack agnostic with preferences for Go, TypeScript & Rust. I ship fast, scale systems, and align teams from engineers to execs.",
    location: {
      city: "Québec",
      countryCode: "CA",
      region: "QC"
    },
    profiles: [
      {
        network: "GitHub",
        username: "pastjean",
        url: "https://github.com/pastjean"
      },
      {
        network: "Personal Website",
        username: "pa.stjean.me",
        url: "https://pa.stjean.me"
      }
    ]
  },
  timeline: [
    {
      type: "work",
      name: "Pinata",
      position: "Principal Engineer (contract)",
      location: "Remote",
      url: "",
      startDate: "2025-03-01",
      endDate: "2025-08-01",
      summary: "",
      highlights: [
        "Built IPFS data migration system allowing clients to import content from 3 competing providers, enabling seamless platform switching",
        "Implemented an async job queue system (River) in Go to handle parallel background processing for file imports, pinning operations, and analytics",
        "Migrated infrastructure from AWS to Cloudflare/Digital Ocean with zero downtime, reducing costs by 50%",
      ]
    },
    {
      type: "work",
      name: "Blissbook",
      position: "Principal Software Engineer & Information Security Officer",
      location: "Remote",
      url: "",
      startDate: "2023-02-01",
      endDate: "2025-03-01",
      summary: "",
      highlights: [
        "Built TypeScript HR sync engine (frontend, backend & infra) for 50k+ employee orgs, integrating 50+ platforms (e.g., BambooHR, Workday, ADP)",
        "Built event-driven pipeline handling real-time employee lifecycle changes with idempotent processing and conflict resolution",
        "Led SOC 2 (Type I and II) certifications and achieve compliance in under 3 months through infrastructure automation and security controls",
        "Reduced deployment time from 3 hours to <15 minutes by optimizing Docker builds and simplifying Github actions pipelines",
      ]
    },
    {
      type: "work",
      name: "Baseten",
      position: "Lead Software Engineer - Infrastructure",
      location: "Remote",
      url: "",
      startDate: "2021-10-01",
      endDate: "2022-10-01",
      summary: "",
      highlights: [
        "Built observability infrastructure using OpenTelemetry for Python/Django platform hosting ML models on Kubernetes",
        "Reduced AWS costs 60% by optimizing resource allocation and introducing spot instances",
        "Automated SOC 2 compliance infrastructure using Drata, accelerating certification timeline",
      ]
    },
    {
      type: "work",
      name: "Braver Health",
      position: "Senior Software Developer (Contract)",
      location: "Québec, Canada",
      url: "",
      startDate: "2021-02-01",
      endDate: "2021-10-01",
      summary: "",
      highlights: [
        "Designed and implemented zero-knowledge telehealth backend services in Rust, Elixir, and Python handling patient data under Quebec health regulations",
        "Built secure API layer for Flutter mobile app ensuring HIPAA-equivalent compliance for medical records",
        "Implemented observability stack and incident response procedures for production systems on GCP/Kubernetes",
      ]
    },
    {
      type: "work",
      name: "1Password",
      position: "Engineering Manager",
      location: "Remote",
      url: "",
      startDate: "2020-08-01",
      endDate: "2021-02-01",
      summary: "",
      highlights: [
        "Led team of 6 engineers building SCIM (System for Cross-domain Identity Management) integration connecting 1Password with enterprise identity providers (Azure AD, Okta, OneLogin)",
        "Designed bidirectional user provisioning system in Go handling automated account creation, updates, and deprovisioning",
        "Discovered and fixed critical security vulnerability in SCIM implementation, earning Security Employee of the Month",
      ]
    },
    {
      type: "work",
      name: "Pleo",
      position: "Engineering Team Lead - Billing & Internationalization",
      location: "Remote",
      url: "",
      startDate: "2019-09-01",
      endDate: "2020-08-01",
      summary: "",
      highlights: [
        "Led team of 5 building billing platform migration supporting new pricing tiers and multi-currency processing",
        "Architected localization system handling currency conversion, regional tax rules, and locale-specific formatting across European markets",
        "Built analytics data pipeline feeding business intelligence dashboards used by executive team for financial reporting",
      ]
    },
    {
      type: "work",
      name: "Pleo",
      position: "Senior Software Engineer",
      location: "Remote",
      url: "",
      startDate: "2017-09-01",
      endDate: "2019-09-01",
      summary: "",
      highlights: [
        "Built fraud detection system processing card transactions in real-time, implementing rule engine and ML-based anomaly detection",
        "Architected banking integration layer synchronizing transactions from multiple European banks and card processors",
        "Designed data pipeline processing millions in monthly transactions, building analytics infrastructure for BI team",
        "Scaled platform infrastructure supporting company growth from 15 to 400 employees maintaining 99.9% uptime",
      ]
    },
    {
      type: "work",
      name: "Coveo",
      position: "Engineering Team Lead",
      location: "Québec, Canada",
      url: "",
      startDate: "2017-01-01",
      endDate: "2017-09-01",
      summary: "",
      highlights: [
        "Led cloud infrastructure team managing Kubernetes deployments for SaaS search platform",
        "Championed infrastructure-as-code adoption across engineering organization using Terraform",
        "Contributed to Kubernetes open source project fixing bugs in cluster management",
      ]
    },
    {
      type: "work",
      name: "Coveo",
      position: "Software Developer",
      location: "Québec, Canada",
      url: "",
      startDate: "2014-12-01",
      endDate: "2017-01-01",
      summary: "",
      highlights: [
        "Built analytics backend processing 2.5M+ events/day for search analytics product",
        "Optimized Redshift database schema and queries reducing query time by 70%",
        "Implemented load balancing for database clusters handling high-volume analytics writes",
        "Built automated demo environment provisioning using Docker and Consul on AWS",
      ]
    },
    {
      type: "project",
      name: "BlackboxDB.io (Sold)",
      position: "Founder",
      location: "Québec, Canada",
      url: "",
      startDate: "2018-01-01",
      endDate: "2021-06-01",
      summary: "Built passwordless analytics platform in Node.js and Rust optimizing water filter performance in mining operations",
      highlights: []
    },
    {
      type: "education",
      institution: "École de Technologie Supérieure",
      area: "Software Engineering",
      studyType: "B.Eng.",
      location: "Montreal, Canada",
      url: "",
      startDate: "2009-09-01",
      endDate: "2013-06-01",
      score: "",
      courses: []
    },
    {
      type: "talk",
      name: "The Rust Programming Language",
      publisher: "Cabane.io",
      location: "Québec, Canada",
      releaseDate: "2018-10-01",
      url: "",
      summary: ""
    },
    {
      type: "talk",
      name: "Microservices Without Interruption",
      publisher: "Web à Québec",
      location: "Québec, Canada",
      releaseDate: "2017-04-01",
      url: "",
      summary: ""
    },
  ]
};
