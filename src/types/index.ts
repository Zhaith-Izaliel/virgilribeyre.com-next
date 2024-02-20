import { RouteLocationRaw } from 'vue-router';

export * from './data';

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

export type ButtonType = 'block-effect' | 'cta-effect';

export type StyleType =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

export type BackgroundStar = {
  size: string;

  time: number;

  number: number;
};

export type AnimationType = 'fadeIn';

export type Option = {
  id: string;

  label: string;

  disabled: boolean;
};

export type SortDirection = 'descending' | 'ascending';

export type SkillsSortBy = 'level' | 'name';

export type SkillsSortOption = {
  id: SkillSortBy;

  direction: SortDirection;
} & Option;
