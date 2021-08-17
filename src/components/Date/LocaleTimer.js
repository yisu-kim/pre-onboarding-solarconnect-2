import React from 'react';
import PropTypes from 'prop-types';
import { getLocaleDate, getLocaleTime } from 'utils/date';
import {
  Contents,
  DateContent,
  TimeContent,
} from 'components/Date/LocaleTimerStyle';

LocaleTimer.propTypes = {
  date: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
};

function LocaleTimer({ date, locale }) {
  return (
    <Contents>
      <DateContent>{getLocaleDate(date, locale)}</DateContent>
      <TimeContent>{getLocaleTime(date, locale)}</TimeContent>
    </Contents>
  );
}

export default LocaleTimer;
