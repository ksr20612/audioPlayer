<img width="1429" alt="image" src="https://github.com/ksr20612/audioPlayer/assets/48278678/3dc05ccd-bf48-4d1c-934d-c77e7224f62b">

# 구성

## `전역 상태 관리(클라이언트측 데이터 관리)` : react-redux(8.1.0), reduxjs/toolkit(1.9.5)
- 플레이할 오디오의 정보(id, title, url)를 관리할 전역값이 존재해야 한다고 판단, redux-toolkit을 사용하여 해당값을 관리하도록 하였습니다.

## `서버측 데이터 관리` : axios(1.3.2), react-query(4.26.1)
- 경험상 클라이언트측 데이터와 서버측 데이터를 분리하여 관리하는 것이 확장성이나 유지보수에 좋아 react-query를 사용하였습니다.
    - 현재 기능 정도의 리스트와 각 음악 데이터는 모두 변경이 잦은 데이터라고 사료되지 않아 5분의 staleTime을 설정해두었습니다.
- 추가적으로 MusicList는 서버측에서 페이징 처리되지 않고 넘어오기 때문에 지연 및 사전 로딩이 불가하여, 최적화를 위해 react-window를 사용하여 윈도잉 기법을 적용하였습니다.
- 브라우저 호환성과 커스텀이 유리한 axios를 사용하여 비동기 데이터를 가져오는 것으로 결정하였습니다.
- axios의 interceptors를 사용하여 에러 처리를 일원화하였습니다. 로깅 용도로도 염두에 두고 있습니다.
- Suspense와 ErrorBoundary를 사용하여 로딩과 에러 처리를 간편하게 핸들링하였습니다.

## `스타일링` : styled-components(5.3.6)
- 가장 사용 경험이 많은 styled-components를 이용하여 스타일링을 하였습니다.
- styled-components.d.ts를 생성하고 적용하여 styled 컴포넌트 내에서 쉽게 타이핑/참조할 수 있게 설정하였습니다.
- [나눔스퀘어 네오] 폰트(woff2, woff, ttf)를 적용하였습니다.

## `테스팅` : jest(29.5.0), cypress(12.14.0)
- 일부 함수의 단위테스트에는 jest를, E2E테스트에는 cypress를 사용하였습니다.

# 상세

## `API 통신`
- API 오류 발생시 UI 처리: suspense와 error boundary를 사용하여 비동기 통신에 오류 발생시 화면에 해당 컴포넌트 안에 오류가 표현되도록 하였습니다.
- API 응답 대기 상태 역시 suspense를 이용, 로딩 스피너로 표현하였습니다.

## `플레이리스트 페이지`
- atomic design pattern을 사용하여 컴포넌트들을 구분하였습니다. 비동기 통신으로 데이터를 가져와야 하는 `더러운` 컴포넌트의 생성이 필수불가결하기 때문에 containers 폴더 안에서 관리하였고, containers/suspense 폴더 안쪽에서 suspense/error-boundary로 감싸놓았습니다.
- react-window를 사용하여 MusicList를 구성해두었습니다.
    - react-window는 고정 크기의 윈도우 창으로 요구하기 때문에, useGetElementSize 훅을 생성하여 컴포넌트 최초 렌더링시 크기를 받아오게끔 설정하였습니다.
    - useGetWindowSize 훅을 생성하여 브라우저의 크기가 변경될 경우 크기값을 가져와, 자동적으로 react-window의 크기를 변경하도록 설정하였습니다. 이때 lodash.debounce를 사용하였습니다.
    - 사용자가 스크롤을 내려 플레이리스트의 음악이 윈도우에 들어올 시에 해당 음악의 url을 prefetch하도록 설정하였습니다(react-query 활용).
- 음원 정보들과 재생 버튼을 구현하였습니다.
- react-query의 select 프로퍼티를 활용하여 최신 발매일 순으로 정렬하였습니다.

## `오디오 플레이어`
- useCreateAudio 훅을 제작하여 오디오 생성부를 분리해두었습니다. 
    - useCreateAudio 훅 내부에서 redux에 저장할 전역 상태들을 이용하고 dispatch 호출하는 것은 의존성을 높인고 훅의 재사용성을 줄인다고 판단하여 훅 내에서의 redux사용부를 걷어내었습니다.
- useFetchAudio 훅을 제작하여 오디오 url을 가져오는 로직을 분리해두었습니다.
- 오디오의 재생바(Slider.tsx)는 html input[type='range'] 엘리먼트를 사용하여 커스텀하였습니다.
    - 처음에는 background(linear-gradient)를 이용하여 진행된 영역을 색칠하도록 구성하였는데, 영역의 길이를 매번 계산하여 props로 전달하는 것이 렌더링을 발생시켜, box-shadow를 이용하는 것으로 재구성하였습니다.
- 크롬과 파이어폭스, 사파리에서 모두 동작합니다.
- 인클루시브한 디자인(웹접근성)을 위해 시맨틱한 html, tabIndex 설정, ARIA(aria-pressed)를 고려하였습니다.
