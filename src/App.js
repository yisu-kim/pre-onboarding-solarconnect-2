import React, { useCallback, useState } from 'react';
import { LOCALE } from 'utils/constants';
import Clock from 'components/Date/Clock';
import LocaleTimer from 'components/Date/LocaleTimer';
import InputForm from 'components/InputForm';
import AscendingSort from 'components/Sort/AscendingSort';
import DescendingSort from 'components/Sort/DescendingSort';

function App() {
  const [date, setDate] = useState(new Date());
  const [inputNumbers, setInputNumbers] = useState([]);
  const [numbers, setNumbers] = useState([]);

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
  };

  return (
    <div>
      <Clock handleDate={handleDate} />
      <LocaleTimer date={date} locale={LOCALE.koKR} />
      <InputForm
        inputNumbers={inputNumbers}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <AscendingSort numbers={numbers} />
      <DescendingSort numbers={numbers} />
      <LocaleTimer date={date} locale={LOCALE.enUS} />
    </div>
  );
}

export default App;

const checkInputNumbers = (inputNumbers) => {
  return inputNumbers.match(/\d+/g).map((number) => parseInt(number));
};
