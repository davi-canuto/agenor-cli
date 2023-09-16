import {
  PortfolioConfig,
  Project,
  Experience,
  Tech,
  Skill,
  AcademicInfo,
  Language,
} from '../../interfaces/index'

export default function blankYaml(): string {
  const tech: Tech = {
    name: '',
  }

  const skill: Skill = {
    name: '',
    isSoftSkill: false,
    description: '',
  }

  const academicInfo: AcademicInfo = {
    name: '',
    description: '',
    certificateUrl: '',
    startAt: 'date format is `DD/MM/YYYY`',
    endAt: 'date format is `DD/MM/YYYY`',
  }

  const language: Language = {
    name: '',
    level: '',
  }

  const experience: Experience = {
    name: '',
    companyName: '',
    companyDescription: '',
    companyUrl: '',
    jobPosition: '',
    workDescription: '',
    startAt: 'date format is `DD/MM/YYYY`',
    endAt: 'date format is `DD/MM/YYYY`',
  }

  const project: Project = {
    name: '',
    description: '',
    startAt: 'date format is `DD/MM/YYYY`',
    endAt: 'date format is `DD/MM/YYYY`',
    techs: [tech],
    url: '',
    isPrivate: true,
  }

  const portfolioConfig: PortfolioConfig = {
    firstName: '',
    lastName: '',
    birthdate: 'date format is `DD/MM/YYYY`',
    occupation: '',
    goals: '',
    biography: '',
    about: '',
    githubUsername: '',
    githubUrl: '',
    instargramUsername: '',
    instargramUrl: '',
    twitterUsername: '',
    twitterUrl: '',
    linkedinUsername: '',
    linkedinUrl: '',
    projects: [project],
    experiences: [experience],
    skills: [skill],
    academicInfos: [academicInfo],
    languages: [language],
  }

  return JSON.stringify(portfolioConfig, null, 2)
}
