import type {
  Social,
  Skill,
  Project,
  TimelineEvent,
  SkillsSortOption,
} from '@/types';
import { DateTime } from 'luxon';

export const skillsSortOptions: SkillsSortOption[] = [
  {
    id: 'name',
    label: 'sort.l_name',
    disabled: false,
    direction: 'ascending',
  },
  {
    id: 'level',
    label: 'sort.l_level',
    disabled: false,
    direction: 'descending',
  },
];

export const socials: Social[] = [
  {
    name: 'mail',
    url: new URL('https://aemail.com/k59x'),
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
    name: 'backend',
    label: 'skills.l_backend',
    level: 3,
    description: 'skills.l_backend_description',
  },
  {
    name: 'bash',
    label: 'skills.l_bash',
    level: 5,
    description: 'skills.l_bash_description',
  },
  {
    name: 'c',
    label: 'skills.l_c',
    level: 5,
    description: 'skills.l_c_description',
  },
  {
    name: 'cplusplus',
    label: 'skills.l_cplusplus',
    level: 2,
    description: 'skills.l_cplusplus_description',
  },
  {
    name: 'csharp',
    label: 'skills.l_csharp',
    level: 2,
    description: 'skills.l_csharp_description',
  },
  {
    name: 'css',
    label: 'skills.l_css',
    level: 5,
    description: 'skills.l_css_description',
  },
  {
    name: 'devops',
    label: 'skills.l_devops',
    level: 4,
    description: 'skills.l_devops_description',
  },
  {
    name: 'docker',
    label: 'skills.l_docker',
    level: 3,
    description: 'skills.l_docker_description',
  },
  {
    name: 'elasticsearch',
    label: 'skills.l_elasticsearch',
    level: 3,
    description: 'skills.l_elasticsearch_description',
  },
  {
    name: 'elixir',
    label: 'skills.l_elixir',
    level: 1,
    description: 'skills.l_elixir_description',
  },
  {
    name: 'frontend',
    label: 'skills.l_frontend',
    level: 5,
    description: 'skills.l_frontend_description',
  },
  {
    name: 'git',
    label: 'skills.l_git',
    level: 5,
    description: 'skills.l_git_description',
  },
  {
    name: 'go',
    label: 'skills.l_go',
    level: 1,
    description: 'skills.l_go_description',
  },
  {
    name: 'graphql',
    label: 'skills.l_graphql',
    level: 2,
    description: 'skills.l_graphql_description',
  },
  {
    name: 'haskell',
    label: 'skills.l_haskell',
    level: 4,
    description: 'skills.l_haskell_description',
  },
  {
    name: 'html',
    label: 'skills.l_html',
    level: 5,
    description: 'skills.l_html_description',
  },
  {
    name: 'java',
    label: 'skills.l_java',
    level: 4,
    description: 'skills.l_java_description',
  },
  {
    name: 'javascript',
    label: 'skills.l_javascript',
    level: 5,
    description: 'skills.l_javascript_description',
  },
  {
    name: 'kubernetes',
    label: 'skills.l_kubernetes',
    level: 1,
    description: 'skills.l_kubernetes_description',
  },
  {
    name: 'linux',
    label: 'skills.l_linux',
    level: 5,
    description: 'skills.l_linux_description',
  },
  {
    name: 'mongodb',
    label: 'skills.l_mongodb',
    level: 2,
    description: 'skills.l_mongodb_description',
  },
  {
    name: 'mysql',
    label: 'skills.l_mysql',
    level: 4,
    description: 'skills.l_mysql_description',
  },
  {
    name: 'nix',
    label: 'skills.l_nix',
    level: 5,
    description: 'skills.l_nix_description',
  },
  {
    name: 'nodejs',
    label: 'skills.l_nodejs',
    level: 5,
    description: 'skills.l_nodejs_description',
  },
  {
    name: 'postcss',
    label: 'skills.l_postcss',
    level: 5,
    description: 'skills.l_postcss_description',
  },
  {
    name: 'postgresql',
    label: 'skills.l_postgresql',
    level: 4,
    description: 'skills.l_postgresql_description',
  },
  {
    name: 'python',
    label: 'skills.l_python',
    level: 4,
    description: 'skills.l_python_description',
  },
  {
    name: 'react',
    label: 'skills.l_react',
    level: 3,
    description: 'skills.l_react_description',
  },
  {
    name: 'rust',
    label: 'skills.l_rust',
    level: 3,
    description: 'skills.l_rust_description',
  },
  {
    name: 'sass',
    label: 'skills.l_sass',
    level: 5,
    description: 'skills.l_sass_description',
  },
  {
    name: 'tailwindcss',
    label: 'skills.l_tailwindcss',
    level: 5,
    description: 'skills.l_tailwindcss_description',
  },
  {
    name: 'typescript',
    label: 'skills.l_typescript',
    level: 5,
    description: 'skills.l_typescript_description',
  },
  {
    name: 'unity',
    label: 'skills.l_unity',
    level: 2,
    description: 'skills.l_unity_description',
  },
  {
    name: 'unreal-engine',
    label: 'skills.l_unreal_engine',
    level: 1,
    description: 'skills.l_unreal_engine_description',
  },
  {
    name: 'vitejs',
    label: 'skills.l_vitejs',
    level: 3,
    description: 'skills.l_vitejs_description',
  },
  {
    name: 'vuejs',
    label: 'skills.l_vuejs',
    level: 5,
    description: 'skills.l_vuejs_description',
  },
  {
    name: 'zig',
    label: 'skills.l_zig',
    level: 1,
    description: 'skills.l_zig_description',
  },
];

export const projects: Project[] = [
  {
    name: 'virgilribeyre-com',
    label: 'projects.l_virgilribeyre-com',
    description: 'projects.l_virgilribeyre-com_description',
    url: new URL('https://gitlab.com/Zhaith-Izaliel/virgilribeyre.com-next'),
    img: new URL('/src/assets/projects/virgilribeyre-com.png', import.meta.url),
  },
  {
    name: 'testability-linter',
    label: 'projects.l_testability_linter',
    description: 'projects.l_testability_linter_description',
    url: new URL('https://gitlab.com/Zhaith-Izaliel/testability-linter'),
    img: new URL('/src/assets/projects/default.jpg', import.meta.url),
  },
  {
    name: 'icypeas',
    label: 'projects.l_icypeas',
    description: 'projects.l_icypeas_description',
    url: new URL('https://www.icypeas.com/'),
    img: new URL('/src/assets/projects/icypeas.png', import.meta.url),
  },
  {
    name: 'filevirtuelle',
    label: 'projects.l_filevirtuelle',
    description: 'projects.l_filevirtuelle_description',
    url: new URL('https://www.filevirtuelle.com/'),
    img: new URL('/src/assets/projects/filevirtuelle.png', import.meta.url),
  },
];

export const events: TimelineEvent[] = [
  {
    label: 'experiences.l_freelance',
    name: 'freelance',
    description: 'experiences.l_freelance_description',
    start: DateTime.fromObject({ month: 10, year: 2019 }),
    end: DateTime.now(),
  },
  {
    label: 'experiences.l_lig',
    name: 'lig',
    description: 'experiences.l_lig_description',
    start: DateTime.fromObject({ month: 5, year: 2023 }),
    end: DateTime.fromObject({ month: 7, year: 2023 }),
  },
  {
    label: 'experiences.l_superpitch',
    name: 'superpitch',
    description: 'experiences.l_superpitch_description',
    start: DateTime.fromObject({ month: 6, year: 2020 }),
    end: DateTime.fromObject({ month: 3, year: 2023 }),
  },
  {
    label: 'experiences.l_miage',
    name: 'miage',
    description: 'experiences.l_miage_description',
    start: DateTime.fromObject({ month: 9, year: 2017 }),
    end: DateTime.fromObject({ month: 9, year: 2020 }),
  },
];
