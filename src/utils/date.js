import { TIMEZONE } from './constants';

export const getLocaleDate = (date, locale) => {
  return date.toLocaleDateString(locale, {
    timeZone: TIMEZONE,
    dateStyle: 'full',
  });
};

export const getLocaleTime = (date, locale) => {
  return date.toLocaleTimeString(locale, {
    timeZone: TIMEZONE,
    timeStyle: 'medium',
  });
};
