export type order = 'ascending' | 'descending';

export const ascendingBubbleSort = (arr: number[]): number[] => {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        const value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }

  return result;
};

export const descendingBubbleSort = (arr: number[]): number[] => {
  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    for (let j = result.length - 1; j > i; j--) {
      if (result[j] > result[j - 1]) {
        const value = arr[j];
        result[j] = result[j - 1];
        result[j - 1] = value;
      }
    }
  }

  return result;
};
