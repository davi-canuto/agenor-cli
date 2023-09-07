import {
  PortfolioConfig,
  Project,
  Experience,
  PersonalInfo,
  Tech,
  Skill,
  AcademicInfo,
  Language,
} from '../../interfaces/index';

import * as yaml from 'js-yaml';

export default function fillJohnDoeData(): any {
  const personalInfo: PersonalInfo = {
    firstName: 'John',
    lastName: 'Doe',
    birthdate: '01/01/1985',
    occupation: 'Software Developer',
    goals: 'To develop innovative web applications',
    biography: 'I am a software developer passionate about creating digital solutions.',
    about: 'I have over 10 years of experience in web development and am always eager to learn new technologies.',
  };

  const tech: Tech = {
    name: 'JavaScript',
  };

  const skill: Skill = {
    name: 'Communication',
    isSoftSkill: true,
    description: 'Ability to communicate ideas clearly and effectively.',
  };

  const academicInfo: AcademicInfo = {
    name: 'Bachelor of Computer Science',
    description: 'Graduated with honors',
    certificateUrl: 'https://example.com/certificate',
    startAt: '01/09/2005',
    endAt: '30/06/2009',
  };

  const language: Language = {
    name: 'English',
    level: 'Fluent',
  };

  const experience: Experience = {
    name: 'Software Co.',
    companyName: 'ABC Corporation',
    companyDescription: 'A leading software company',
    companyUrl: 'https://www.abc-corp.com',
    jobPosition: 'Senior Web Developer',
    workDescription: 'Developed web applications using cutting-edge technologies.',
    startAt: '01/07/2015',
    endAt: '30/06/2020',
  };

  const project: Project = {
    name: 'E-commerce Website',
    description: 'Built a fully functional e-commerce website with online payment integration.',
    startAt: '01/08/2018',
    endAt: '30/12/2018',
    techs: [tech],
    url: 'https://www.example-ecommerce.com',
    isPrivate: false,
  };

  const portfolioConfig: PortfolioConfig = {
    personalInfo,
    projects: [project],
    experiences: [experience],
    skills: [skill],
    academicInfos: [academicInfo],
    languages: [language],
  };

  return yaml.dump(portfolioConfig);
}
