export interface PortfolioConfig {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  academicInfos: AcademicInfo[];
  languages: Language[]
}

export interface Project {
  name: string;
  description: string;
  startAt: string;
  techs: Tech[];
  endAt?: string;
  url?: string;
  isPrivate?: boolean;
}

export interface Experience{
  name: string;
  companyName: string;
  companyDescription?: string;
  companyUrl?: string;
  jobPosition: string;
  workDescription?: string;
  startAt: string;
  endAt?: string;
}

export interface PersonalInfo{
  firstName: string;
  lastName: string;
  birthdate: string;
  occupation: String;
  goals: String;
  biography: String;
  about: string;
  githubUsername: String;
  githubUrl: string;
  instargramUsername?: String;
  instargramUrl?: string;
  twitterUsername?: String;
  twitterUrl?: string;
  linkedinUsername?: String;
  linkedinUrl?: string;
}

export interface Tech{
  name: string;
}

export interface Skill{
  name: string;
  isSoftSkill: boolean;
  description?: string;
}

export interface AcademicInfo{
  name: string;
  description?: string;
  certificateUrl?: string;
  startAt: string;
  endAt?: string;
}

export interface Language{
  name: string;
  level: string;
}