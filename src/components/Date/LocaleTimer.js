import React from 'react';
import PropTypes from 'prop-types';
import { getLocaleDate, getLocaleTime } from 'utils/date';

LocaleTimer.propTypes = {
  date: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
};

function LocaleTimer({ date, locale }) {
  return (
    <>
      <p>{getLocaleDate(date, locale)}</p>
      <p>{getLocaleTime(date, locale)}</p>
    </>
  );
}

export default LocaleTimer;
