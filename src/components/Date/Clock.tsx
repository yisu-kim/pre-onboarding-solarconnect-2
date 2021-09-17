import React, { useEffect } from 'react';

interface ClockProps {
  handleDate: () => void;
}

const Clock: React.FC<ClockProps> = ({ handleDate }) => {
  useEffect(() => {
    if (handleDate) {
      const timerId: NodeJS.Timeout = setInterval(() => handleDate(), 1000);
      return () => clearInterval(timerId);
    }
  }, [handleDate]);

  return null;
};

export default Clock;
