import React, { useCallback, useState, useEffect } from 'react';
import { LOCALE } from 'utils/constants';
import Clock from 'components/Date/Clock';
import LocaleTimer from 'components/Date/LocaleTimer';
import InputForm from 'components/InputForm';
import AscendingSort from 'components/Sort/AscendingSort';
import DescendingSort from 'components/Sort/DescendingSort';

function App() {
  const [date, setDate] = useState(new Date());
  const [inputNumbers, setInputNumbers] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [showDescending, setShowDescending] = useState(true);

  useEffect(() => {
    if (numbers.length > 0) {
      const timerId = setTimeout(() => setShowDescending(true), 3000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [numbers]);

  const handleDate = useCallback(() => {
    setDate(new Date());
  }, []);

  const handleChange = (e) => {
    setInputNumbers(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNumbers(checkInputNumbers(inputNumbers));
    setInputNumbers([]);
    setShowDescending(false);
  };

  return (
    <div>
      <Clock handleDate={handleDate} />
      <LocaleTimer date={date} locale={LOCALE.koKR} />
      <InputForm
        inputNumbers={inputNumbers}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showDescending={showDescending}
      />
      <AscendingSort numbers={numbers} />
      <DescendingSort numbers={numbers} showDescending={showDescending} />
      <LocaleTimer date={date} locale={LOCALE.enUS} />
    </div>
  );
}

export default App;

const checkInputNumbers = (inputNumbers) => {
  return inputNumbers.match(/\d+/g).map((number) => parseInt(number));
};
