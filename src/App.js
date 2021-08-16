import React from 'react';
import { LOCALE } from 'utils/constants';
import { getFullLocaleDate } from 'utils/date';

function App() {
  return (
    <div>
      <p>한국: {getFullLocaleDate(NOW, LOCALE.koKR)}</p>
      <p>미국: {getFullLocaleDate(NOW, LOCALE.enUS)}</p>
    </div>
  );
}

export default App;

const NOW = new Date();
