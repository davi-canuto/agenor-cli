export interface PortfolioConfig {
  firstName: string
  lastName: string
  birthdate: string
  occupation: string
  goals: string
  biography: string
  about: string
  githubUsername: string
  githubUrl: string
  instargramUsername?: string
  instargramUrl?: string
  twitterUsername?: string
  twitterUrl?: string
  linkedinUsername?: string
  linkedinUrl?: string
  projects: Project[]
  experiences: Experience[]
  skills: Skill[]
  academicInfos: AcademicInfo[]
  languages: Language[]
}

export interface Project {
  name: string
  description: string
  startAt: string
  techs: Tech[]
  endAt?: string
  url?: string
  isPrivate?: boolean
}

export interface Experience {
  name: string
  companyName: string
  companyDescription?: string
  companyUrl?: string
  jobPosition: string
  workDescription?: string
  startAt: string
  endAt?: string
}

export interface Tech {
  name: string
}

export interface Skill {
  name: string
  isSoftSkill: boolean
  description?: string
}

export interface AcademicInfo {
  name: string
  description?: string
  certificateUrl?: string
  startAt: string
  endAt?: string
}

export interface Language {
  name: string
  level: string
}
