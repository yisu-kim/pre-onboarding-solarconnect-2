import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FormattedDate from './FormattedDate';

LocaleTimer.propTypes = {
  date: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
  handleDate: PropTypes.func,
};

function LocaleTimer({ date, locale, handleDate }) {
  useEffect(() => {
    if (handleDate) {
      const timerId = setInterval(() => handleDate(), 1000);
      return () => clearInterval(timerId);
    }
  }, [handleDate]);

  return <FormattedDate date={date} locale={locale}></FormattedDate>;
}

export default LocaleTimer;
