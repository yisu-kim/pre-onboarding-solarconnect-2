import React, { useCallback, useState } from 'react';
import { LOCALE } from 'utils/constants';
import LocaleTimer from 'components/Date/LocaleTimer';
import AscendingSort from 'components/Sort/AscendingSort';
import DescendingSort from 'components/Sort/DescendingSort';

function App() {
  const [date, setDate] = useState(new Date());

  const handleDate = useCallback(() => {
    setDate(new Date());
  }, []);

  return (
    <div>
      <LocaleTimer date={date} locale={LOCALE.koKR} handleDate={handleDate} />
      <AscendingSort />
      <DescendingSort />
      <LocaleTimer date={date} locale={LOCALE.enUS} />
    </div>
  );
}

export default App;
