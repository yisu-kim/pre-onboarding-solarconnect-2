import React, { useCallback, useState } from 'react';
import { LOCALE } from 'utils/constants';
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
    // TO DO : 예외처리 추가
    const numbers = e.target.value.split(',');
    setInputNumbers(numbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumbers(inputNumbers);
    setInputNumbers([]);
  };

  return (
    <div>
      <LocaleTimer date={date} locale={LOCALE.koKR} handleDate={handleDate} />
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
