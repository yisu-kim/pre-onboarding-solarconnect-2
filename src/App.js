import React, { useCallback, useState, useEffect } from 'react';
import { LOCALE } from 'utils/constants';
import Clock from 'components/Date/Clock';
import LocaleTimer from 'components/Date/LocaleTimer';
import InputForm from 'components/InputForm';
import AscendingSort from 'components/Sort/AscendingSort';
import DescendingSort from 'components/Sort/DescendingSort';
import style from './AppStyle';

function App() {
  const [date, setDate] = useState(new Date());
  const [inputNumbers, setInputNumbers] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [message, setMessage] = useState('');
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

    const checked = checkInputNumbers(inputNumbers);
    if (!checked) {
      setMessage('숫자를 둘 이상 입력해주세요.');
      return;
    } else {
      setMessage('');
    }

    setNumbers(checked);
    setInputNumbers([]);
    setShowDescending(false);
  };

  return (
    <Container>
      <Clock handleDate={handleDate} />
      <LocaleTimer date={date} locale={LOCALE.koKR} />
      <InputForm
        inputNumbers={inputNumbers}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showDescending={showDescending}
        message={message}
      />
      <AscendingSort numbers={numbers} />
      <DescendingSort numbers={numbers} showDescending={showDescending} />
      <LocaleTimer date={date} locale={LOCALE.enUS} />
    </Container>
  );
}

export default App;

const { Container } = style;

const checkInputNumbers = (inputNumbers) => {
  const onlyNumbers = inputNumbers.match(/\d+/g);
  if (onlyNumbers && onlyNumbers.length > 1) {
    return onlyNumbers.map((number) => parseInt(number));
  }
};
