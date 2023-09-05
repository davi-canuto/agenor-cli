export interface PortfolioConfig {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  educations: Education[];
  certificates: Certificate[]
  languages: Language[]
}

export interface Project {
  name: string;
  description: string;
  startAt: string;
  stacks: Stack[];
  endAt?: string;
  url?: string;
}

export interface Experience{
  name: string;
  jobPosition: string;
  startAt: Date;
  endAt?: Date;
  description?: string;
}

export interface PersonalInfo{
  name: string;
  jobPosition: string;
  about: string;
}

export interface Stack{
  name: string;
}

export interface Skill{
  name: string;
  description?: string;
}

export interface Education{
  name: string;
  collegeName: string;
  startAt: Date;
  description?: string;
  endAt?: Date;
}

export interface Language{
  name: string;
  level: string;
}

export interface Certificate{
  name: string;
  description: string;
  url: string;
}