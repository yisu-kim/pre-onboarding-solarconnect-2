/* eslint-disable react/prop-types */
import React from 'react';

function AscendingSort(props) {
  const arr = [...props.numbers];
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
