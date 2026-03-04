import type { Preview } from '@storybook/react';
import '../src/index.css'; // Tailwind 전역 CSS 주입

const preview: Preview = {
  parameters: {
    // Controls: 색상, 날짜 타입 자동 인식
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Docs 페이지 기본 레이아웃
    layout: 'centered',
    // 배경색 프리셋
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light gray', value: '#f9fafb' },
        { name: 'dark', value: '#111827' },
      ],
    },
    // Viewport 프리셋
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
      },
    },
  },
};

export default preview;
