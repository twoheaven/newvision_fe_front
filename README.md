# NewVision Frontend

## 프로젝트 소개

이 프로젝트는 React와 TypeScript를 기반으로 한 프론트엔드 애플리케이션입니다.

## 기술 스택

- **프레임워크**: React 18
- **언어**: TypeScript
- **빌드 도구**: Vite
- **상태 관리**: Jotai
- **스타일링**: Styled Components
- **라우팅**: React Router DOM
- **다국어 지원**: i18next
- **에디터**: TipTap
- **UI 컴포넌트**: React Slick, Swiper
- **알림**: React Toastify, SweetAlert2
- **백엔드 서비스**: Firebase (Auth, Firestore)
- **이미지 처리**: ImgBB, browser-image-compression

## 주요 기능

- 반응형 웹 디자인
- 다국어 지원
- 이미지 최적화 및 처리
  - 이미지 압축
  - 이미지 호스팅 (ImgBB)
  - 최적화된 이미지 로딩
- 텍스트 에디터
- 슬라이더/캐러셀
- Firebase 기반 사용자 인증 및 데이터 관리

## 시작하기

### 필수 요구사항

- Node.js
- Yarn 3.3.1

### 설치

```bash
# 패키지 설치
yarn install
```

### 개발 서버 실행

```bash
# 개발 서버 실행
yarn dev
```

### 빌드

```bash
# 프로덕션 빌드
yarn build
```

### 린트

```bash
# 코드 린트 실행
yarn lint
```

## 프로젝트 구조

### 디렉토리 구조

```
newvision_fe_front/
├── src/                      # 소스 코드
│   ├── @types/              # 타입 정의 파일
│   ├── apis/                # API 통신 관련 코드
│   ├── assets/              # 이미지, 폰트 등 정적 자원
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── common/         # 공통 컴포넌트
│   │   │   ├── ErrorFallback.tsx    # 에러 처리 컴포넌트
│   │   │   ├── OptimizedImage.tsx   # 이미지 최적화 컴포넌트
│   │   │   └── Skeleton.tsx         # 로딩 스켈레톤 컴포넌트
│   │   ├── text/           # 텍스트 관련 컴포넌트
│   │   ├── youtube/        # 유튜브 영상 관련 컴포넌트
│   │   ├── box/           # 박스형 컴포넌트
│   │   └── line/          # 라인 컴포넌트
│   ├── constants/           # 상수 정의
│   ├── hooks/              # 커스텀 훅
│   │   └── useIsMobile.tsx # 모바일 환경 감지 훅
│   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── Header1.tsx     # 메인 헤더 컴포넌트
│   │   ├── Header2.tsx     # 서브 헤더 컴포넌트
│   │   ├── Footer.tsx      # 푸터 컴포넌트
│   │   ├── Layout.tsx      # 전체 레이아웃 구조
│   │   └── Mobile/         # 모바일 대응 컴포넌트
│   ├── locales/            # 다국어 지원 리소스
│   ├── note/               # 게시판 관련 기능
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── book/          # 도서 관련 페이지
│   │   ├── main/          # 메인 페이지
│   │   ├── missionary/    # 선교 관련 페이지
│   │   ├── news/          # 소식 페이지
│   │   ├── sermon/        # 설교 페이지
│   │   ├── introduce/     # 소개 페이지
│   │   └── holyschool/    # 성경학교 페이지
│   ├── styles/             # 전역 스타일
│   └── types/              # 타입 정의
├── public/                  # 정적 파일
├── .vscode/                 # VS Code 설정
├── .yarn/                   # Yarn 설정
├── node_modules/           # 외부 라이브러리
├── index.html              # 진입점 HTML
├── package.json            # 프로젝트 설정 및 의존성
├── tsconfig.json           # TypeScript 설정
├── vite.config.ts          # Vite 설정
└── ...                     # 기타 설정 파일
```

### 주요 디렉토리 상세 설명

#### `src/components`

- **common/**
  - `ErrorFallback.tsx`: 에러 발생 시 표시되는 폴백 UI 컴포넌트
  - `OptimizedImage.tsx`: 이미지 최적화(lazy loading, async decoding) 컴포넌트
  - `Skeleton.tsx`: 콘텐츠 로딩 중 표시되는 스켈레톤 UI
- **text/**: 텍스트 스타일링 및 포맷팅 관련 컴포넌트
- **youtube/**: 유튜브 영상 임베드 및 플레이어 컴포넌트
- **box/**: 컨테이너 및 카드 형태의 UI 컴포넌트
- **line/**: 구분선 및 경계선 관련 컴포넌트

#### `src/layout`

- **헤더 컴포넌트**
  - `Header1.tsx`: 메인 네비게이션 및 브랜딩
  - `Header2.tsx`: 서브 메뉴 및 추가 네비게이션
  - `MobileHeader1.tsx`, `MobileHeader2.tsx`: 모바일 최적화 헤더
- **레이아웃 관리**
  - `Layout.tsx`: 전체 페이지 레이아웃 구조 정의
  - `Footer.tsx`: 공통 푸터 컴포넌트
- **모바일 대응**
  - `MobileContext.tsx`: 모바일 상태 관리 컨텍스트
  - `MobileProvider.tsx`: 모바일 상태 제공자

#### `src/hooks`

- `useIsMobile.tsx`: 반응형 디자인을 위한 모바일 환경 감지 훅
  - 화면 크기에 따른 모바일 여부 판단
  - 동적 레이아웃 전환에 활용

#### `src/pages`

- **book/**: 도서 목록 및 상세 정보 페이지
- **main/**: 홈페이지 메인 화면
- **missionary/**: 선교 활동 및 정보 페이지
- **news/**: 교회 소식 및 공지사항
- **sermon/**: 설교 영상 및 자료
- **introduce/**: 교회 소개 페이지
- **holyschool/**: 성경학교 프로그램 정보

#### `src/note`

- 게시판 시스템 구현
- Firebase 기반 CRUD 기능
- 리치 텍스트 에디터 통합
- 이미지 업로드 및 최적화

#### `src/locales`

- i18next 기반 다국어 지원
- 언어별 번역 파일 관리
- 동적 언어 전환 기능

## 개발 환경 설정

- TypeScript 설정: `tsconfig.json`
- ESLint 설정: `.eslintrc.json`
- Prettier 설정: `.prettierrc`
- Vite 설정: `vite.config.ts`

## 의존성

### 주요 패키지

- react: ^18.2.0
- typescript: ^5.2.2
- vite: ^4.0.0
- styled-components: ^5.3.6
- react-router-dom: ^6.15.0
- i18next: ^23.2.8

자세한 의존성 목록은 `package.json` 파일을 참조하세요.

## 라이선스

이 프로젝트는 private 프로젝트입니다.

### 주요 파일 상세 설명

#### 공통 컴포넌트

```typescript
// OptimizedImage.tsx
// 이미지 최적화를 위한 래퍼 컴포넌트
interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy" // 지연 로딩
      decoding="async" // 비동기 디코딩
      {...props}
    />
  );
};
```

#### 레이아웃 시스템

```typescript
// Layout.tsx
const Layout = () => {
  return (
    <MyThemeProvider theme={{ ...colorSet }}>
      <MobileProvider>
        <Flex flexDirection="column" style={{ minHeight: "100vh" }}>
          <Header1Wrapper /> {/* 반응형 헤더 */}
          <Outlet /> {/* 라우트 컨텐츠 */}
          <Footer />
          <ToastContainer /> {/* 알림 시스템 */}
        </Flex>
      </MobileProvider>
    </MyThemeProvider>
  );
};

// 반응형 헤더 선택 로직
const Header1Wrapper = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHeader1 /> : <Header1 />;
};
```

#### 커스텀 훅

```typescript
// useIsMobile.tsx
// 모바일 환경 감지를 위한 커스텀 훅
const useIsMobile = () => {
  const context = useContext(MobileContext);

  if (!context) {
    throw new Error("useIsMobile must be used within a MobileProvider");
  }

  return context.isMobile;
};
```

### 주요 기능 구현 설명

#### 1. 반응형 레이아웃 시스템

- `MobileProvider`를 통한 모바일 상태 관리
- `useIsMobile` 훅을 사용한 동적 컴포넌트 전환
- 모바일/데스크톱 전용 헤더 컴포넌트 분리

#### 2. 이미지 최적화

- `OptimizedImage` 컴포넌트를 통한 이미지 최적화
  - Lazy Loading: 뷰포트에 들어올 때만 로딩
  - Async Decoding: 메인 스레드 블로킹 방지
  - 접근성: alt 텍스트 필수 지정

#### 3. 레이아웃 구조

- Flex 기반의 반응형 레이아웃
- 중첩 라우팅을 위한 Outlet 사용
- 테마 프로바이더를 통한 일관된 디자인
- 전역 알림 시스템 통합

#### 4. 상태 관리

- Context API를 활용한 모바일 상태 관리
- Props Drilling 방지를 위한 전역 상태 설계
- 커스텀 훅을 통한 상태 로직 재사용
