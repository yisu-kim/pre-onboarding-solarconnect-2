import { LOCALE } from 'utils/constants';
import { getLocaleDate, getLocaleTime } from 'utils/date';

describe('Locale 날짜/시간 테스트', () => {
  test('Locale 한국 날짜 테스트', () => {
    expect(getLocaleDate(new Date('2021-10-13'), LOCALE.koKR)).toBe(
      '2021년 10월 13일 수요일',
    );
  });
  test('Locale 미국 날짜 테스트', () => {
    expect(getLocaleDate(new Date('2021-10-13'), LOCALE.enUS)).toBe(
      'Wednesday, October 13, 2021',
    );
  });
  test('Locale 한국 시간 테스트', () => {
    expect(getLocaleTime(new Date('2021-10-13 13:49:25'), LOCALE.koKR)).toBe(
      '오후 1:49:25',
    );
  });
  test('Locale 미국 시간 테스트', () => {
    expect(getLocaleTime(new Date('2021-10-13 13:49:25'), LOCALE.enUS)).toBe(
      '1:49:25 PM',
    );
  });
});
