import { DateTime } from 'luxon';

/**
 * Defines the acceptable name of social
 */
export type SocialName = 'gitlab' | 'github' | 'mail' | 'linkedin' | 'malt';

/**
 * Defines a Navbar social link
 */
export type Social = {
  /**
   * Name of the social link
   */
  name: SocialName;

  /**
   * URL of the social link
   */
  url: URL;
};

/**
 * Defines a skill, usually a programming language
 */
export type Skill = {
  /**
   * The label of the skill
   */
  label: string;

  /**
   * Internal name of the skill. The name is used to fetched its SVG from `@/assets/skills/${name}.svg`
   */
  name: string;

  /**
   * VueI18n label description of the skill
   */
  description: string;

  /**
   * The level of skill, from 1 (beginner) to 5 (expert)
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

/**
 * Defines a project, can be a git repository or a proprietary software I worked on
 */
export type Project = {
  /**
   * The label of the project
   */
  label: string;

  /**
   * The internal name of the project
   */
  name: string;

  /**
   * VueI18n label description of the Project
   */
  description: string;

  /**
   * The URL of the image used as a backdrop for the project
   */
  img: URL;

  /**
   * The URL to the project, if applicable
   */
  url?: URL;
};

export type TimelineEvent = {
  /**
   * The label of the event
   */
  label: string;

  /**
   * The internal name of the event
   */
  name: string;

  /**
   * VueI18n label description of the event
   */
  description: string;

  /**
   * The start of the event
   */
  start: DateTime;

  /**
   * The end of the event
   */
  end: DateTime;
};
