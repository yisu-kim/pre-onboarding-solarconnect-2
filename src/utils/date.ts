import { TIMEZONE } from './constants';

export const getLocaleDate = (date: Date, locale: string): string => {
  return date.toLocaleDateString(locale, {
    timeZone: TIMEZONE,
    dateStyle: 'full',
  });
};

export const getLocaleTime = (date: Date, locale: string): string => {
  return date.toLocaleTimeString(locale, {
    timeZone: TIMEZONE,
    timeStyle: 'medium',
  });
};
