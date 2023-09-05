import {
  PortfolioConfig,
  Project,
  Experience,
  PersonalInfo,
  Stack,
  Skill,
  Education,
  Language,
  Certificate
} from '../../interfaces/index';

import * as yaml from 'js-yaml'

export default function blankYaml(): any {
  const personalInfo: PersonalInfo = {
    name: '',
    jobPosition: '',
    about: '',
  };

  const stack: Stack = {
    name: '',
  };

  const skill: Skill = {
    name: '',
    description: '',
  };

  const education: Education = {
    name: '',
    collegeName: '',
    startAt: new Date(),
    description: '',
  };

  const language: Language = {
    name: '',
    level: '',
  };

  const certificate: Certificate = {
    name: '',
    description: '',
    url: '',
  };

  const experience: Experience = {
    name: '',
    jobPosition: '',
    startAt: new Date(),
    description: '',
  };

  const project: Project = {
    name: '',
    description: '',
    startAt: '',
    stacks: [stack],
  };

  const portfolioConfig: PortfolioConfig = {
    personalInfo,
    projects: [project],
    experiences: [experience],
    skills: [skill],
    educations: [education],
    certificates: [certificate],
    languages: [language],
  };

  return yaml.dump(portfolioConfig);
}