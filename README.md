<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://www.solarconnect.kr/">
    <img src="https://user-images.githubusercontent.com/37607373/130215930-0247f890-9ac1-4764-a742-08457a929cb0.jpg" alt="solarconnect logo" width=150 />
  </a>

  <h3 align="center">현재 시간 확인 및 숫자 정렬이 가능한 웹페이지</h3>
  
  <p align="center">
    프리온보딩 코스 SolarConnect 기업 과제
    <br />
    <br />
    <a href="https://solar-connect-sorting-machine.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/six-sense/4_solarConnect_team3">Original Team Repo</a>
  </p>
</p>

<!-- Assignment Requirements -->
<details>
  <summary>📋 과제 요구사항 보기</summary>
  <div markdown="1">

#### 과제 요약

- 소팅 기능을 가진 서비스입니다.
- 숫자를 스트링으로 입력 받고, 버튼을 누르면 결과가 나타납니다.

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/133918092-7404fd4d-e380-4600-942a-3d0e300bd9cd.jpg" alt="wireframe of sorting machine" />
</p>

#### 과제 조건

1. 타이머

   - [1, 6. 타이머]는 재활용이 가능한 Component로 구성합니다.
   - [1. 타이머]는 “ko-KR” 지역시간 표기법으로 나타냅니다. (예> 2021년 7월 20일 화요일)
   - [6. 타이머]는 “en-US” 지역시간 표기법으로 나타냅니다. (예> Tuesday July 20, 2021)
   - 한국 표준시를 기준으로 나타냅니다.

2. 입력

   - 사용자의 입력을 받습니다.
   - 입력 데이터의 형식은 “숫자, 숫자, 숫자…” 입니다. (예> 1,2,3,4)
   - 잘못된 형식의 입력데이터는 예외처리하여 사용합니다.

3. 시작

   - 사용자가 버튼을 누르면 소팅이 시작됩니다.
   - [4. 결과 필드]에 바로 노출 되고 3초 후에 [5. 결과 필드]에 결과가 노출 됩니다.

4. 결과

   - 결과 데이터의 형식은 “숫자, 숫자, 숫자…” 입니다. (예> 1, 2, 3, 4)
   - [4. 결과 필드]에서는 오름차순 결과를 나타냅니다.
   - [5. 결과 필드]에서는 내림차순 결과를 나타냅니다.
   - 알고리즘은 소팅알고리즘을 사용하지 않고, 본인이 구현할 수 있는 정렬 방법으로 직접 구현합니다.

5. 기타 조건

   - ReactJS로 구현합니다.
   - 과제를 위한 추가적인 패키지 설치는 자유입니다.
   - 레이아웃은 그림을 참고하되, UI 및 UX는 작성자 편의에 맞게 구현합니다.
   - 상기 조건을 제외한 모든 부분들은 작성자 편의에 맞게 구현합니다.

#### 추가

- 과제 수행중에 참고했던 사이트가 있다면 README.md 파일에 출처를 기입합니다.
- 예> 정렬알고리즘 : https://정렬알고리즘.co.kr

  </div>
</details>

## About The Project

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/133918749-83ccb991-0162-4f23-aae5-c50968d8457e.gif" alt="project screenshot" height=600 />
</p>

### Built With

- React
- TypeScript
- styled-components

## Getting Started

### Installation

To install packages:

```sh
npm install
```

To serve the app:

```sh
npm start
```

## Features

> 제가 개발에 참여한 기능은 ✅로 표시했습니다.

1. ✅ 타이머

   - toLocaleDateString, toLocaleTimeString 함수로 locale 날짜 및 시간 util 작성
   - 현재 시각을 표시하는 한국어/영어 타이머 구현

2. ✅ 입력 필드

   - 입력 데이터는 정수로 가정하고 쉼표(,) 및 모든 문자열로 숫자를 구분
   - 숫자는 두 개 이상 입력하도록 검증

3. ✅ 시작 버튼

   - Sort 버튼 클릭 시 정렬 시작

4. 결과 필드

   - 입력된 데이터는 ex) 1, 9, 45, 3, 2 와 같이 구분되어 나타남
   - 버블정렬을 이용하여 정렬 기능 구현
   - 오름차순, 내림차순 순서로 렌더링되어 화면에 나타남
   - ✅ 내림차순 결과 렌더링 3초 딜레이

## Refactoring

- 둘로 나뉘어 구현된 정렬 결과 컴포넌트를 재사용 가능하게 변경
- TypeScript로 변환

## Members

- [yisu-kim](https://github.com/yisu-kim)
- [hurima90-kim](https://github.com/hurima90-kim)

## References

- [Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
- [Date.prototype.toLocaleTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
- [[JS Algorithm] 자바스크립트 Sorting - 기본편 (Bubble, Selection, Insertion)](https://velog.io/@young_mason/Algorithm-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Sorting-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Basic%ED%8E%B8)
