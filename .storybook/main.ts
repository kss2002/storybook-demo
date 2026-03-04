import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',   // Controls, Actions, Docs, Viewport, Backgrounds
    '@storybook/addon-a11y',         // 접근성(WCAG) 자동 검사
    '@storybook/addon-interactions', // play() 함수 인터랙션 테스트
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag', // stories에 tags: ['autodocs'] 달린 것만 자동 문서화
  },
};

export default config;
