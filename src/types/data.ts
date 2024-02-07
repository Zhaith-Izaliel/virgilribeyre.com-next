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
  url: string;
};

/**
 * Defines a Terminal Text used for the TeminalText component
 */
export type TerminalText = {
  /**
   * The label of the text
   */
  label: string;

  /**
   * The class applied to the text
   */
  class: string;

  /**
   * The time in ms to write the text defined in `label`
   */
  time: number;
};

/**
 * Defines a skill to showoff, usually a programming language
 */
export type Skill = {
  /**
   * The label of the skill
   */
  label: string;

  /**
   * Internal name of the skill
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
