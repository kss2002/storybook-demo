# 개발 환경 세팅 가이드

## 사전 요구사항

| 도구    | 권장 버전 | 확인 명령어 |
| ------- | --------- | ----------- |
| Node.js | 18 이상   | `node -v`   |
| npm     | 9 이상    | `npm -v`    |

Node.js 설치는 [https://nodejs.org](https://nodejs.org) 에서 LTS 버전을 사용하세요.

## 1. 저장소 클론 및 의존성 설치

```bash
git clone https://github.com/your-org/react-storybook-demo.git
cd react-storybook-demo
npm install
```

## 2. Storybook 실행

```bash
npm run storybook
```

브라우저에서 `http://localhost:6006` 이 자동으로 열립니다.  
열리지 않으면 직접 주소를 입력해 주세요.

## 3. 주요 스크립트 정리

| 명령어                    | 설명                                      |
| ------------------------- | ----------------------------------------- |
| `npm run storybook`       | Storybook 로컬 개발 서버 실행 (포트 6006) |
| `npm run build-storybook` | Storybook 정적 파일 빌드 (배포용)         |
| `npm run dev`             | React 앱 개발 서버 실행 (포트 5173)       |
| `npm run type-check`      | TypeScript 타입 오류 검사                 |
| `npm run test`            | 단위 테스트 실행                          |

## 4. 프로젝트 구조

```
react-storybook-demo/
├── .github/
│   └── workflows/               # CI/CD (Chromatic 자동 배포)
├── .storybook/
│   ├── main.ts                  # Storybook 빌드 설정, 애드온 등록
│   └── preview.ts               # 전역 데코레이터, 배경·뷰포트 프리셋
├── src/
│   ├── components/              # UI 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.tsx       # 컴포넌트 구현
│   │   │   └── Button.stories.tsx  # Storybook 스토리
│   │   ├── Badge/
│   │   ├── Input/
│   │   └── Card/
│   ├── lib/
│   │   └── utils.ts             # cn() 유틸 (clsx + tailwind-merge)
│   ├── stories/
│   │   └── Introduction.mdx    # Storybook 홈 소개 페이지
│   └── index.css                # Tailwind 전역 스타일
├── docs/
│   ├── SETUP.md                 # 이 파일
│   ├── STORYBOOK_DEPLOY.md      # 배포 가이드
│   └── CONTRIBUTING.md          # 컴포넌트 기여 가이드
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 5. 자주 발생하는 문제

**Storybook이 실행되지 않을 때**

```bash
rm -rf node_modules
npm install
npm run storybook
```

**Tailwind 스타일이 적용되지 않을 때**

`.storybook/preview.ts` 파일에서 `import '../src/index.css'` 가 있는지 확인하세요.

**TypeScript 오류가 발생할 때**

```bash
npm run type-check
```

오류 위치를 확인하고 해당 파일을 수정하세요.
