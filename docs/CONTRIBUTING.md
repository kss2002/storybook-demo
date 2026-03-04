# 컴포넌트 기여 가이드

새로운 컴포넌트를 추가하거나 기존 컴포넌트를 수정할 때 따라야 할 규칙을 정리했습니다.

---

## 컴포넌트 추가 순서

### 1. 폴더 및 파일 생성

`src/components/` 아래에 컴포넌트명으로 폴더를 만들고, 아래 두 파일을 생성합니다.

```
src/components/ComponentName/
├── ComponentName.tsx        # 컴포넌트 구현
└── ComponentName.stories.tsx  # Storybook 스토리
```

### 2. 컴포넌트 구현 (`ComponentName.tsx`)

- **Props 인터페이스를 반드시 export** 합니다. Storybook Controls 자동 생성에 사용됩니다.
- 스타일링은 **Tailwind CSS + `cn()` 유틸**을 사용합니다.
- 접근성: `aria-*` 속성, `role`, `htmlFor` 등을 적절히 지정합니다.
- 외부에서 `className`을 덮어쓸 수 있도록 `className?: string` prop을 받습니다.
- `React.forwardRef`로 ref를 전달할 수 있게 합니다 (Input, Button 등 인터랙티브 요소).

```tsx
// 기본 틀 예시
import React from 'react';
import { cn } from '@/lib/utils';

export interface MyComponentProps {
  /** Props에 JSDoc 주석을 달면 Storybook에 자동 표시됩니다 */
  variant?: 'a' | 'b';
  children: React.ReactNode;
  className?: string;
}

export function MyComponent({ variant = 'a', children, className }: MyComponentProps) {
  return (
    <div className={cn('...', className)}>
      {children}
    </div>
  );
}
```

### 3. 스토리 작성 (`ComponentName.stories.tsx`)

- 파일 상단에 `tags: ['autodocs']` 를 반드시 추가합니다. (자동 Props 문서화)
- 컴포넌트 설명은 `parameters.docs.description.component` 에 한국어로 작성합니다.
- **Default 스토리**를 먼저 작성하고, 각 주요 상태별 스토리를 추가합니다.
- 여러 변형을 한눈에 비교하는 `AllVariants` 스토리를 포함하면 좋습니다.

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent', // 사이드바 경로
  component: MyComponent,
  tags: ['autodocs'],              // 필수: 자동 문서화
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '컴포넌트에 대한 한 줄 설명을 작성합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: { children: '내용' },
};
```

---

## 스타일 규칙

- 색상은 `tailwind.config.ts`에 정의된 **브랜드 토큰**(`brand-*`)을 우선 사용합니다.
- 임의의 `[hex값]` 사용은 지양합니다.
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
