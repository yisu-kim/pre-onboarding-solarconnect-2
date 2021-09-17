import React, {
  useCallback,
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
} from 'react';
import { LOCALE } from 'utils/constants';
import Clock from 'components/Date/Clock';
import LocaleTimer from 'components/Date/LocaleTimer';
import InputForm from 'components/InputForm';
import SortResult from 'components/SortResult';
import style from './AppStyle';

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [inputNumbers, setInputNumbers] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [message, setMessage] = useState('');
  const [showResult, setShowResult] = useState(true);

  const handleDate = useCallback(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    if (numbers.length > 0) {
      const timerId: NodeJS.Timeout = setTimeout(
        () => setShowResult(true),
        3000,
      );
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [numbers]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputNumbers(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const checked = checkInputNumbers(inputNumbers);
    if (!checked) {
      setMessage('숫자를 둘 이상 입력해주세요.');
      return;
    } else {
      setMessage('');
    }

    setNumbers(checked);
    setInputNumbers('');
    setShowResult(false);
  };

  return (
    <Container>
      <Clock handleDate={handleDate} />
      <LocaleTimer date={date} locale={LOCALE.koKR} />
      <InputForm
        inputNumbers={inputNumbers}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showDescending={showResult}
        message={message}
      />
      <SortResult order="ascending" numbers={numbers} />
      <SortResult
        order="descending"
        numbers={numbers}
        hasDelay={true}
        showResult={showResult}
      />
      <LocaleTimer date={date} locale={LOCALE.enUS} />
    </Container>
  );
};

export default App;

const { Container } = style;

const checkInputNumbers = (inputNumbers: string): number[] | null => {
  const onlyNumbers = inputNumbers.match(/\d+/g);
  if (onlyNumbers && onlyNumbers.length > 1) {
    return onlyNumbers.map((number) => parseInt(number));
  }
  return null;
};
