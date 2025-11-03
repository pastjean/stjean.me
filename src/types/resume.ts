// src/types/resume.ts

export type WorkEntry = {
  enabled?: boolean;
  type: "work";
  name: string; // company name
  position: string; // job title
  location: string;
  url?: string;
  startDate: string; // ISO 8601 (YYYY-MM-DD)
  endDate?: string; // ISO 8601, optional for current jobs
  summary?: string;
  highlights: string[]; // responsibilities
};

export type ProjectEntry = {
  enabled?: boolean;
  type: "project";
  name: string; // project name
  position: string; // your role
  location: string;
  url?: string;
  startDate: string; // ISO 8601
  endDate?: string; // ISO 8601
  summary: string;
  highlights: string[];
};

export type EducationEntry = {
  enabled?: boolean;
  type: "education";
  institution: string;
  area: string; // field of study
  studyType: string; // degree type (e.g., "B.Eng.")
  location: string;
  url?: string;
  startDate: string; // ISO 8601
  endDate: string; // ISO 8601
  score?: string;
  courses?: string[];
};

export type TalkEntry = {
  enabled?: boolean;
  type: "talk";
  name: string; // talk title
  publisher: string; // conference/venue
  location: string;
  releaseDate: string; // ISO 8601 (single date)
  url?: string;
  summary?: string;
};

export type TimelineEntry =
  | WorkEntry
  | ProjectEntry
  | EducationEntry
  | TalkEntry;

export type Profile = {
  network: string;
  username: string;
  url: string;
};

export type Location = {
  city: string;
  countryCode: string;
  region: string;
};

export type Basics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
};

export type ResumeData = {
  basics: Basics;
  skills?: {
    name: string;
    level: string;
    keywords: string[];
  }[];
  timeline: TimelineEntry[];
};
