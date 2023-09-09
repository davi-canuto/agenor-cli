import {
  PortfolioConfig,
  Project,
  Experience,
  PersonalInfo,
  Tech,
  Skill,
  AcademicInfo,
  Language,
} from '../../interfaces/index'

import * as yaml from 'js-yaml'

export default function blankYaml(): any {
  const personalInfo: PersonalInfo = {
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
  }

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
    personalInfo,
    projects: [project],
    experiences: [experience],
    skills: [skill],
    academicInfos: [academicInfo],
    languages: [language],
  }

  return yaml.dump(portfolioConfig)
}
