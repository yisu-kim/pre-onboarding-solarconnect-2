import React from 'react';

const items = '3 5 6 1 2 9'.split(' ').map((n) => {
  return parseInt(n, 10);
});

function AscendingSort() {
  const arr = [...items];
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        let value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }

  return <div>{result}</div>;
}

export default AscendingSort;
