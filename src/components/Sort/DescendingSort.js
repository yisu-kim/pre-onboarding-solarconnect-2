import React from 'react';

const items = '3 5 6 1 2 9'.split(' ').map((n) => {
  return parseInt(n, 10);
});

function DescendingSort() {
  const arr = [...items];
  let result = arr.slice();
  //   const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    for (let j = result.length - 1; j > i; j--) {
      if (result[j] > result[j - 1]) {
        let value = result[j];
        result[j] = result[j - 1];
        result[j - 1] = value;
      }
    }
  }

  return <div>{result}</div>;
}

export default DescendingSort;
