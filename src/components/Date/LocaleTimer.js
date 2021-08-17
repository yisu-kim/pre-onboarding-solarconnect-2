import React from 'react';
import PropTypes from 'prop-types';
import { getFullLocaleDate } from 'utils/date';

LocaleTimer.propTypes = {
  date: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
};

function LocaleTimer({ date, locale }) {
  return <span>{getFullLocaleDate(date, locale)}</span>;
}

export default LocaleTimer;
