import React from 'react';
import { getLocaleDate, getLocaleTime } from 'utils/date';
import {
  Contents,
  DateContent,
  TimeContent,
} from 'components/Date/LocaleTimerStyle';

interface LocaleTimerProps {
  date: Date;
  locale: string;
}

const LocaleTimer: React.FC<LocaleTimerProps> = ({ date, locale }) => {
  return (
    <Contents>
      <DateContent>{getLocaleDate(date, locale)}</DateContent>
      <TimeContent>{getLocaleTime(date, locale)}</TimeContent>
    </Contents>
  );
};

export default LocaleTimer;
