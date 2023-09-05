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

export default function filledYaml(): any {
  const personalInfo: PersonalInfo = {
    name: 'John Doe',
    jobPosition: 'Full-stack Developer',
    about: 'I am a passionate developer with a love for creating web and mobile applications.',
  };

  const stack: Stack = {
    name: 'Node.js, React, TypeScript',
  };

  const skill: Skill = {
    name: 'Problem Solving',
    description: 'I have a strong problem-solving mindset and enjoy tackling complex challenges.',
  };

  const education: Education = {
    name: 'Computer Science Degree',
    collegeName: 'Tech University',
    startAt: new Date('2015-09-01'),
    description: 'Graduated with honors and specialized in web development.',
  };

  const language: Language = {
    name: 'Spanish',
    level: 'Fluent',
  };

  const certificate: Certificate = {
    name: 'Advanced Web Development',
    description: 'Certified in advanced web development techniques and technologies.',
    url: 'https://www.example.com/certificate',
  };

  const experience: Experience = {
    name: 'ABC Tech Solutions',
    jobPosition: 'Senior Software Engineer',
    startAt: new Date('2018-03-15'),
    description: 'Led a team of developers in building innovative web applications.',
  };

  const project: Project = {
    name: 'E-commerce Website',
    description: 'Built a feature-rich e-commerce platform using the latest technologies.',
    startAt: '2022-01-01',
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
