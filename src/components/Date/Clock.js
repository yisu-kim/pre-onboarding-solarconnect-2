import { useEffect } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
  date: PropTypes.instanceOf(Date),
  handleDate: PropTypes.func,
};

function Clock({ handleDate }) {
  useEffect(() => {
    if (handleDate) {
      const timerId = setInterval(() => handleDate(), 1000);
      return () => clearInterval(timerId);
    }
  }, [handleDate]);

  return null;
}

export default Clock;
