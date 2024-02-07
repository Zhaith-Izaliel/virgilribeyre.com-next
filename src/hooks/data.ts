import type { Social, SocialName } from '@/types';
import _ from 'lodash';
import { socials } from '@/data';

export function getSocialByName(name: SocialName): Social {
  const social = _.find(socials, (social) => social.name === name);
  return !social ? socials[0] : social;
}
