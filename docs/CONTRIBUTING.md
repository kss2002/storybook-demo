# 컴포넌트 기여 가이드

새로운 컴포넌트를 추가하거나 기존 컴포넌트를 수정할 때 따라야 할 규칙을 정리했습니다.

---

## 컴포넌트 추가 순서

### 1. 파일 생성

`src/stories/components/` 아래에 컴포넌트명으로 두 파일을 생성합니다.

```
src/stories/components/
├── ComponentName.tsx        # 컴포넌트 구현
└── ComponentName.stories.ts # Storybook 스토리
```

### 2. 컴포넌트 구현 (`ComponentName.tsx`)

- **Props 인터페이스를 반드시 export** 합니다. Storybook Controls 자동 생성에 사용됩니다.
- 스타일링은 **Tailwind CSS**를 사용합니다. CSS 파일은 별도로 생성하지 않습니다.
- Props에 JSDoc 주석을 달면 Storybook Docs에 자동으로 표시됩니다.

```tsx
// 기본 틀 예시
export interface MyComponentProps {
  /** Props에 JSDoc 주석을 달면 Storybook에 자동 표시됩니다 */
  variant?: 'a' | 'b';
  label: string;
}

export const MyComponent = ({ variant = 'a', label }: MyComponentProps) => {
  return <div className="...">{label}</div>;
};
```

### 3. 스토리 작성 (`ComponentName.stories.ts`)

- `tags: ['autodocs']` 를 반드시 추가합니다. (자동 Props 문서화)
- `title`은 `'Example/ComponentName'` 형식으로 맞춥니다.
- **Default 스토리**를 먼저 작성하고, 각 주요 상태별 스토리를 추가합니다.

```ts
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Example/MyComponent',
  component: MyComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: '내용' },
};
```

---

## 스타일 규칙

- 스타일은 Tailwind CSS 유틸리티 클래스만 사용합니다. 별도 CSS 파일을 추가하지 않습니다.
- Tailwind v4를 사용하므로 `tailwind.config.ts` 파일은 없습니다. `src/index.css`에서 `@import 'tailwindcss'`로 전역 스타일을 불러옵니다.
- 반응형이 필요한 경우 모바일 우선(`sm:`, `md:`)으로 작성합니다.

## 커밋 메시지 규칙

```
feat(Button): 로딩 스피너 추가
fix(Input): 에러 상태 border 색상 수정
docs(Badge): 스토리 설명 업데이트
```

---

## PR 체크리스트

PR을 올리기 전에 아래를 확인해 주세요.

- [ ] `npm run type-check` 오류 없음
- [ ] `npm run test` 통과
- [ ] 스토리가 Storybook에서 정상 렌더링됨
- [ ] 접근성 탭에서 오류 없음
- [ ] 새로운 Props에 JSDoc 주석 작성
