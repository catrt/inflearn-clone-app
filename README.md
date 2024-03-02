# 👀 자신이 원하는 사이트 레이아웃 클론

원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.

## 실제사이트 and 클론사이트

실제 사이트 : [인프런](https://www.inflearn.com/)

클론 사이트 : [인프런 - CATRT](https://main--calm-starburst-03b82b.netlify.app/)

## 기간

- 2024/02/20 ~ 2024/02/25

## 사용 기술 스택

- Programming

  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SASS&logoColor=white"> <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=white">

- Deploying

  <img src="https://img.shields.io/badge/NETLIFY-00C7B7?style=for-the-badge&logo=NETLIFY&logoColor=white">

## 주요 구현 사항

- 시멘틱 태그 최대한 활용
- flex, grid 활용
  - 실제 사이트가 flex 정말 많이 사용(거의 모든 container에 flex 사용)
- BEM 방법론 최대한 사용
- swiper를 사용한 section 최대한 비슷하게 구현

  **1. Nav Section**
    - 드롭다운 구현

  **2. Hero Section**
    - active된 slide에 따라 페이지 번호 렌더링
    - 기본 pagination bullet이 active될 때 가운데 정렬
    - hero-more에 존재하는 추가 pagination과 기본 pagination 연동

  **3. Searching Section**
    - 검색창 클릭 시 특정 스크롤 위치로 이동

  **4. New Curation Section**
    - slide가 남아있지 않은 경우 swiper-navigation-button 제거

  **5. Free / Welcome / New Course Sectoin**
    - slide가 남아있지 않은 경우 swiper-navigation-button blur 처리 및 클릭 불가능
    - course-content hover할 경우 cover 제공
    - cover의 좌측 하단의 button hover시 툴팁 제공

  **6. Roadmap Section**
    - slide가 남아있지 않은 경우 swiper-navigation-button blur 처리 및 클릭 불가능

  **7. Review Section**
    - review swiper item을 스크롤로 이동 가능

  **8. Footer Section**
    - menu 영역의 클릭 가능한 부분 hover시 underline 추가
    - meta 영역의 클릭 가능한 부분 hover시 색상 변경

  **9. Chat Section**
    - toggler 클릭 시 채팅창 등장

## 실제 사이트와 다르게 수정한 부분 & 어려웠던 부분

- hero section의 내부의 이미지와 맞지 않은 배경색 수정
- 검색창 padding-right 추가해서 검색 아이콘과 겹치지 않게 수정
- 사용된 아이콘이 Font Awesome 사이트에 없어서 google icon으로 대체하거나 생략
- swiper를 사용하면 width, heigth, margin 등을 알아서 부여해 주는데 스타일을 적용할 때 필요없다고 생각해서 일부분 선택자를 생략했더니 css 우선순위에서 밀려서 원하는 스타일이 적용되지 않아 애먹음

## 맞게 구현한건지 확실하지 않은 부분
- swiper-pagination의 bullet이 active가 되면 가운데 정렬을 해주고 싶어서 JS에서 특정 pixel만큼 transform를 해줌
- main의 검색창 클릭시 화면 이동을 JS의 scrollTo로 구현

## 구현하지 못한 부분 & 아쉬운 부분

- active된 bullet의 위치에 따라서 자동화된 가운데 정렬을 구현하려다 실패함
- swiper에서 아직 남은 slide가 존재한다는 의미의 blur 구현하지 못함
  - 새로운 요소 선언 후 filter로 구현한 것으로 추정
- course-content의 cover의 크기가 약간의 오차가 있음
  - line-height 문제인 줄 알았으나 아니였음
- 반응형 고려하지 못함
- scss의 중첩 기능을 제외하고 @mixin, @use 등 다른 기능 사용하지 못함
- 코드 정리 매우 안 좋음
- HTML의 반복되는 요소들(course-content)을 JS로 렌더링하지 못함
  - HTMl의 코드가 매우 길어짐

## 실제 사이트를 클론 코딩하면서 느낀 점

- 실제 사이트에서 flex를 굉장히 많이 사용함
- 메뉴와 같이 가로 방향으로 나열한 요소들을 space-between으로 정렬할 때 요소 사이에 gap이나 margin 추가함
  - container가 줄어들었을 때 완벽하게 붙지 않게 하기 위함
- 특정 요소마다 글자 스타일(font-size, color, font-weight ...)을 적용하기 보다는 특정 class를 추가하여 해당 스타일을 적용하는 방식을 사용함
- 위와 마찬가지로 비슷하게 생긴 요소들(button, container, box ...)은 특정 class를 추가하여 스타일을 작용하는 방식을 사용함
- 따라서 어떤 요소에 클래스를 붙인다는 것이 굉장히 체계적이라는 것을 느낌

## 리팩토링 이후 변경점

- active된 bullet의 위치에 따라서 자동화된 가운데 정렬을 구현
- swiper에서 아직 남은 slide가 존재한다는 의미의 blur 구현
- main.scss에 모든 코드가 작성되었던 부분을 @use, @forward를 이용해 여러 scss 파일로 구분
- nav의 dropdown 구조를 JS로 렌더링