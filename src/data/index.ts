import type { Social, TerminalText, Skill, Project } from '@/types';

export const socials: Social[] = [
  {
    name: 'mail',
    url: new URL('https://aemail.com/82LL'),
  },
  {
    name: 'malt',
    url: new URL('https://www.malt.fr/profile/virgilribeyre'),
  },
  {
    name: 'linkedin',
    url: new URL('https://www.linkedin.com/in/virgil-ribeyre-810135196'),
  },
  {
    name: 'gitlab',
    url: new URL('https://gitlab.com/Zhaith-Izaliel'),
  },
  {
    name: 'github',
    url: new URL('https://github.com/Zhaith-Izaliel'),
  },
];

export const skills: Skill[] = [
  {
    name: 'vuejs',
    label: 'skills.l_vuejs',
    level: 5,
    description: 'skills.l_vuejs_description',
  },
];

export const projects: Project[] = [
  {
    name: 'testability-linter',
    label: 'projects.l_testability_linter',
    description: 'projects.l_testability_linter_description',
    url: new URL('https://gitlab.com/Zhaith-Izaliel/testability-linter'),
    img: new URL('/src/assets/projects/default.png', import.meta.url),
  },
];

export const terminalTexts: TerminalText[] = [
  {
    label: 'l_fullstack',
    class: 'text-indigo-500',
    time: 2,
  },
  {
    label: 'l_system',
    class: 'text-indigo-500',
    time: 2,
  },
  {
    label: 'l_devops',
    class: 'text-indigo-500',
    time: 2,
  },
  {
    label: 'l_video_games',
    class: 'text-indigo-500',
    time: 2,
  },
  {
    label: 'l_software_developer',
    class: 'text-indigo-500',
    time: 2,
  },
];
