import { RouteLocationRaw } from 'vue-router';

/**
 * Defines a Navbar item
 */
export type INavBarItem = {
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
