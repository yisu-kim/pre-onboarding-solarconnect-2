import React, { useEffect, useState } from 'react';
import { ascendingBubbleSort, descendingBubbleSort, order } from 'utils/sort';
import { ResultContent, ResultTitle } from './SortResultStyle';

interface SortResultProps {
  order: order;
  numbers: number[];
  hasDelay?: boolean;
  showResult?: boolean;
}

const SortResult: React.FC<SortResultProps> = ({
  order,
  numbers,
  hasDelay,
  showResult,
}) => {
  const [title, setTitle] = useState('');
  const [sorted, setSorted] = useState<number[]>([]);

  useEffect(() => {
    switch (order) {
      case 'ascending':
        setTitle('오름차순');
        setSorted(ascendingBubbleSort(numbers));
        break;
      case 'descending':
        setTitle('내림차순');
        setSorted(descendingBubbleSort(numbers));
        break;
      default:
        throw new Error('unknown order');
    }
  }, [numbers]);

  return (
    <>
      <ResultTitle>{title}</ResultTitle>
      <ResultContent>
        {hasDelay ? showResult && sorted.join(', ') : sorted.join(', ')}
      </ResultContent>
    </>
  );
};

export default SortResult;
