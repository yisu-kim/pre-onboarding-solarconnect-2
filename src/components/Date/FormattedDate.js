import React from 'react';
import PropTypes from 'prop-types';
import { getFullLocaleDate } from 'utils/date';

FormattedDate.propTypes = {
  date: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
};

function FormattedDate({ date, locale }) {
  return <span>{getFullLocaleDate(date, locale)}</span>;
}

export default FormattedDate;
