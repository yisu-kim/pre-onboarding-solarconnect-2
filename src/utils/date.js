import { TIMEZONE } from './constants';

export const getFullLocaleDate = (date, locale) => {
  return date.toLocaleDateString(locale, {
    timeZone: TIMEZONE,
    dateStyle: 'full',
  });
};
