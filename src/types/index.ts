import { RouteLocationRaw } from 'vue-router';

/**
 * Defines a Navbar item
 */
export type NavBarItem = {
  /**
   * The label of the item
   */
  label: string;

  /**
   * Optional: the classes passed to the item, to override style
   */
  classes: string[];

  /**
   * The link to which the item refers to
   */
  route: RouteLocationRaw;
};

/**
 * Defines a Navbar social link
 */
export type NavBarSocial = {
  /**
   * Name of the social link
   */
  name: 'gitlab' | 'github' | 'mail' | 'linkedin' | 'malt';

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
   * The time it takes for every letter to be typed and deleted
   */
  time: number;
}
