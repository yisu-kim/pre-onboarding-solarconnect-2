import { TIMEZONE } from './constants';

export const getFullLocaleDate = (date, locale) => {
  return date.toLocaleString(locale, {
    timeZone: TIMEZONE,
    dateStyle: 'full',
    timeStyle: 'long',
  });
};
