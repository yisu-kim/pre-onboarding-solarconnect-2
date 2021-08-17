/* eslint-disable react/prop-types */
import React from 'react';

function DescendingSort(props) {
  const arr = [...props.numbers];
  let result = arr.slice();

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
