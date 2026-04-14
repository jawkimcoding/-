# Lotto Generator Blueprint

## Overview
이 프로젝트는 사용자가 1부터 45 사이의 무작위 로또 번호 6개를 생성할 수 있는 현대적이고 직관적인 웹 애플리케이션입니다. 시각적으로 즐거운 애니메이션과 한국 로또의 표준 색상 체계를 적용하여 사용자 경험을 극대화합니다.

## Project Structure
- `index.html`: 메인 구조 및 UI 레이아웃
- `style.css`: 디자인 시스템, 애니메이션, 반응형 스타일링
- `main.js`: 로또 번호 생성 알고리즘 및 UI 업데이트 로직
- `blueprint.md`: 프로젝트 명세 및 변경 이력 관리

## Features & Implementation Detail
### 1. Visual Design & Aesthetics
- **Modern UI**: 부드러운 그림자(Drop Shadows)와 둥근 모서리(Rounded Corners)를 사용한 카드형 레이아웃.
- **Texture**: 메인 배경에 미세한 노이즈 텍스처를 적용하여 고급스러운 느낌 부여.
- **Lotto Balls**: 
  - 1-10: 노란색 (`#fbc400`)
  - 11-20: 파란색 (`#69c8f2`)
  - 21-30: 빨간색 (`#ff7239`)
  - 31-40: 회색 (`#aaaaaa`)
  - 41-45: 초록색 (`#b0d840`)
- **Animations**: 번호가 생성될 때 볼이 튀어 오르거나(Bounce) 서서히 나타나는(Fade-in) 효과.

### 2. Functional Requirements
- **Random Generation**: 중복 없는 6개의 난수 추출 (1-45).
- **Sorting**: 추출된 번호를 오름차순으로 정렬하여 표시.
- **History Tracking**: 최근 생성된 번호 조합을 하단에 리스트 형태로 저장.
- **Responsiveness**: 모바일과 데스크톱 환경 모두 최적화된 레이아웃 제공.

## Current Tasks (Step-by-Step)
1. [x] `blueprint.md` 작성 및 프로젝트 개요 정의
2. [ ] `index.html` 구조 설계 (컨테이너, 버튼, 히스토리 섹션)
3. [ ] `style.css` 스타일링 (배경, 볼 색상, 애니메이션 정의)
4. [ ] `main.js` 로직 구현 (번호 생성, 정렬, DOM 렌더링, 히스토리 관리)
5. [ ] 최종 테스트 및 오류 수정
