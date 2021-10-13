import { ascendingBubbleSort, descendingBubbleSort } from 'utils/sort';

describe('버블정렬 테스트', () => {
  test('오름차순 정렬 테스트', () => {
    expect(ascendingBubbleSort([8, 3, 5, 1, 0])).toEqual([0, 1, 3, 5, 8]);
  });
  test('음수 포함 오름차순 정렬 테스트', () => {
    expect(ascendingBubbleSort([8, 3, -5, 1, 0])).toEqual([-5, 0, 1, 3, 8]);
  });
  test('소수 포함 오름차순 정렬 테스트', () => {
    expect(ascendingBubbleSort([8, 3, 5, 1, 0, 3.7])).toEqual([
      0, 1, 3, 3.7, 5, 8,
    ]);
  });
  test('내림차순 정렬 테스트', () => {
    expect(descendingBubbleSort([8, 3, 5, 1, 0])).toEqual([8, 5, 3, 1, 0]);
  });
  test('음수 포함 내림차순 정렬 테스트', () => {
    expect(descendingBubbleSort([8, -3, 5, 1, 0])).toEqual([8, 5, 1, 0, -3]);
  });
  test('소수 포함 내림차순 정렬 테스트', () => {
    expect(descendingBubbleSort([8, 3, 5, 5.6, 1, 0])).toEqual([
      8, 5.6, 5, 3, 1, 0,
    ]);
  });
});
