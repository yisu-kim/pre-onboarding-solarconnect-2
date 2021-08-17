import React from 'react';
import PropTypes from 'prop-types';
import { getFullLocaleDate } from 'utils/date';
import styled from 'styled-components';

LocaleTimer.propTypes = {
  date: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
};

function LocaleTimer({ date, locale }) {
  return <DateContent>{getFullLocaleDate(date, locale)}</DateContent>;
}

const DateContent = styled.span`
  display: flex;
  width: 100%;
  font-size: 20px;
`;

export default LocaleTimer;
