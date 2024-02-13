import type { Skill, Social, SocialName, TimelineEvent } from '@/types';
import { find } from 'lodash';
import { socials } from '@/data';

/**
 * Find the first social in '@/data' socials going by the provided name
 * @param name - The name of the needed social
 * @returns the first social found going by the provided name, otherwise the first social in the list
 */
export function getSocialByName(name: SocialName): Social {
  const social = find(socials, (item: Social) => item.name === name);
  return !social ? socials[0] : social;
}

/**
 * Sort the provided list of events and returns the new list sorted by start date
 * @param events - the list of events to sort
 * @returns The sorted events list
 */
export function sortEvents(events: TimelineEvent[]): TimelineEvent[] {
  return events.toSorted((a: TimelineEvent, b: TimelineEvent) => {
    if (a.end > b.end) {
      return -1;
    }

    if (a.end < b.end) {
      return 1;
    }
    return 0;
  });
}

/**
 * Sort the provided list of skills and returns the new list sorted alphabetically
 * @param skills - the list of skills to sort
 * @returns the sorted skills list
 */
export function sortSkills(skills: Skill[]): Skill[] {
  return skills.toSorted((a: Skill, b: Skill) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
}
